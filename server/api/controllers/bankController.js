"use strict";
const pgp = require("pg-promise")(/*options*/);
const cn = process.env.DATABASE_URL;
const db = pgp(cn); // database instance;

exports.list_all_banks = async (req, res) => {
  try {
    let data = await db.any(`SELECT code,name FROM "Bank";`);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};
exports.create_a_bank = async (req, res) => {
  try {
    let bankName = req.params.bankName;
    let allBanksData = await db.any(`SELECT code,name FROM "Bank";`);
    // Check if the name given exist
    if (
      allBanksData.find(bank => {
        return bank.name == bankName;
      })
    ) {
      return res.send("Bank name already exist!");
    }

    let shouldSearch = true;
    //Here we loop till we find a bankCode that doesnt exist
    while (shouldSearch) {
      let bankCode = Math.floor(Math.random() * (7000 - 1000 + 1) + 1000);
      let results = allBanksData.find(bank => {
        return bank.code == bankCode;
      });
      if (results) {
        continue;
      } else {
        shouldSearch = false;
        await db.any(
          `INSERT INTO "Bank"(code,name) VALUES (${bankCode},'${bankName}');`
        );
        res.send("Bank created!");
      }
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.delete_a_bank = (req, res) => {
  /*   Message.findById(req.params.messageId, function(err, message) {
    if (err) {
      return res.send(err);
    }
    res.json(message);
  }); */
};

exports.list_all_persons = async (req, res) => {
  try {
    let data = await db.any(`SELECT name FROM "Person";`);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};
exports.create_a_person = async (req, res) => {
  try {
    let personName = req.params.personName;
    let allPersonsData = await db.any(`SELECT name FROM "Person";`);
    //Check if the given name exist
    if (
      allPersonsData.find(person => {
        return person.name == personName;
      })
    ) {
      return res.send("Person name already exist!");
    }

    await db.any(`INSERT INTO "Person"(name) VALUES ('${personName}');`);
    res.send("Person created!");
  } catch (error) {
    res.send(error);
  }
};

exports.delete_a_person = (req, res) => {
  /*   Message.findById(req.params.messageId, function(err, message) {
    if (err) {
      return res.send(err);
    }
    res.json(message);
  }); */
};
exports.list_all_accounts = async (req, res) => {
  try {
    let data = await db.any(
      `SELECT "accountNumber",balance,"personId","bankId" FROM "Account";`
    );
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};
exports.create_an_account = async (req, res) => {
  try {
    let personName = req.params.personName;
    let bankName = req.params.bankName;

    //Checking if a person have 2 accounts on a bank
    let acc = await db.any(
      `SELECT COUNT(*) FROM "Account" as a
    INNER JOIN "Bank" as b
    ON b.id = a."bankId" AND b.name = '${bankName}'
    INNER JOIN "Person" as p ON p.id = a."personId" AND p.name = '${personName}'`
    );

    if (acc[0].count >= 2)
      return res.send("This person has already two accounts on this bank");

    // Getting bankcode and concatenate it to a random number
    let bankData = await db.any(
      `SELECT id,code FROM "Bank" WHERE name = '${bankName}';`
    );
    if (!bankData[0]) return res.send("Bank doesnt exist");

    let accountCode =
      bankData[0].code +
      Math.floor(Math.random() * (700000 - 323001 + 1) + 323001);

    await db.any(
      `INSERT INTO "Account"("accountNumber",balance,"personId","bankId")
       VALUES (${accountCode},0,(SELECT id FROM "Person" WHERE name = '${personName}'),
       ${bankData[0].id});`
    );

    res.send("Account created!");
  } catch (error) {
    console.log(error);
    if (error.code == 23502) {
      res.send("person doesnt exist");
    }
    res.send(error);
  }
};

exports.delete_an_account = (req, res) => {
  /*   Message.findById(req.params.messageId, function(err, message) {
    if (err) {
      return res.send(err);
    }
    res.json(message);
  }); */
};

exports.deposit_money = async (req, res) => {
  try {
    let fee = req.params.fee;
    let accountNumber = req.params.accountNumber;
    await db.any(
      `UPDATE "Account" SET balance = balance + '${fee}'
       WHERE "accountNumber" = '${accountNumber}';`
    );

    res.send("Money succesfuly deposited!");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.withdraw_money = async (req, res) => {
  try {
    let fee = req.params.fee;
    let accountNumber = req.params.accountNumber;

    //Check if fee isnt bigger than current balance
    let balance = await db.any(
      `SELECT balance FROM "Account" 
       WHERE "accountNumber" = '${accountNumber}';`
    );
    if (fee > balance[0].balance) return res.send("Insufficent money!");

    await db.any(
      `UPDATE "Account" SET balance = balance - '${fee}'
       WHERE "accountNumber" = '${accountNumber}';`
    );

    res.send("Money succesfuly withdrawn!");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
