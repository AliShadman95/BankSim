"use strict";
const db = require("../../db");

exports.list_all_accounts_person = async (req, res) => {
  try {
    let personName = req.params.personName;
    let accData = await db.any(
      `SELECT a."accountNumber",a.balance,b.name "bankName"
       FROM "Account" as a
       INNER JOIN "Person" as p ON p.id = a."personId"
       INNER JOIN "Bank" as b ON b.id = a."bankId"
       WHERE p.name = '${personName}';`
    );
    if (accData.length == 0) return res.send(["Person not found"]);
    res.send(accData);
  } catch (error) {
    res.send(error);
  }
};
exports.list_all_accounts_bank = async (req, res) => {
  try {
    let bankName = req.params.bankName;
    let accData = await db.any(
      `SELECT a."accountNumber",a.balance,p.name "personName"
        FROM "Account" as a
        INNER JOIN "Person" as p ON p.id = a."personId"
        INNER JOIN "Bank" as b ON b.id = a."bankId"
        WHERE b.name = '${bankName}';`
    );
    if (accData.length == 0) return res.send("Bank not found");
    res.send(accData);
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

    let accountNumber = await db.any(
      `INSERT INTO "Account"("accountNumber",balance,"personId","bankId")
       VALUES (${accountCode},0,(SELECT id FROM "Person" WHERE name = '${personName}'),
       ${bankData[0].id}) RETURNING "accountNumber";`
    );

    res.send({
      message: "Account created!",
      accountNumber: accountNumber[0].accountNumber
    });
  } catch (error) {
    console.log(error);
    if (error.code == 23502) {
      res.send({ message: "person doesnt exist" });
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

exports.balance_of_account = async (req, res) => {
  try {
    let accountNumber = req.params.accountNumber;

    const accData = await db.any(
      `SELECT balance FROM "Account"
       WHERE "accountNumber" = '${accountNumber}';`
    );

    res.send(accData[0].balance);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
