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
    let allBankCodes = await db.any(`SELECT code,name FROM "Bank";`);
    // Check if the name given exist
    if (
      allBankCodes.find(bank => {
        return bank.name == bankName;
      })
    ) {
      return res.send("Bank name already exist!");
    }

    let shouldSearch = true;
    //Here we loop till we find a bankCode that doesnt exist
    while (shouldSearch) {
      let bankCode = Math.floor(Math.random() * (7000 - 1000 + 1) + 1000);
      let results = allBankCodes.find(bank => {
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
    let data = await db.any(`INSERT INTO "Person"(name) VALUES ('test');`);

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
    let data = await db.any(`SELECT name FROM "Person";`);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};
exports.create_an_account = async (req, res) => {
  try {
    // Getting bankcode and concatenate it to a random number
    let bankData = await db.any(
      `SELECT id,code FROM "Bank" WHERE name = 'tes';`
    );
    let accountCode =
      bankData[0].code +
      Math.floor(Math.random() * (700000 - 323001 + 1) + 323001);

    await db.any(
      `INSERT INTO "Account"("accountNumber",balance,"personId","bankId")
       VALUES (${accountCode},0,(SELECT id FROM "Person" WHERE name = 'test'),${bankData[0].id});`
    );

    res.send("Account created!");
  } catch (error) {
    console.log(error);
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
