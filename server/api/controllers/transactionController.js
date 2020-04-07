"use strict";
const db = require("../../db");
const moment = require("moment");

exports.deposit_money = async (req, res) => {
  try {
    let fee = req.params.fee;
    let accountNumber = req.params.accountNumber;
    const balance = await db.any(
      `UPDATE "Account" SET balance = balance + '${fee}'
       WHERE "accountNumber" = '${accountNumber}' RETURNING balance;`
    );

    //Inserting in transactions tables
    const tTypeData = await db.any(
      `INSERT INTO "TransactionType"("Code") VALUES ('deposit') RETURNING id ;`
    );
    const transaction = await db.any(
      `INSERT INTO "Transaction"
     ("TransactionTime","Amount","AccountFromId","TransactionTypeId")
      VALUES ('${moment().format()}','${fee}',(SELECT id FROM "Account"
      WHERE "accountNumber" = '${accountNumber}'),
     '${tTypeData[0].id}') RETURNING "TransactionTime","Amount";`
    );

    res.send({
      message: "Money succesfully deposited!",
      balance,
      transaction,
      error: false,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: error, error: true });
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
    console.log(balance);
    if (
      fee >
      parseFloat(balance[0].balance.toString().substr(1).replace(/,/g, ""))
    ) {
      return res.send({ message: "Insufficent money!", error: true });
    }

    let updatedBalance = await db.any(
      `UPDATE "Account" SET balance = balance - '${fee}'
       WHERE "accountNumber" = '${accountNumber}' RETURNING balance;`
    );
    //Inserting in transactions tables
    const tTypeData = await db.any(
      `INSERT INTO "TransactionType"("Code") VALUES ('withdraw') RETURNING id ;`
    );
    const transaction = await db.any(
      `INSERT INTO "Transaction"
     ("TransactionTime","Amount","AccountFromId","TransactionTypeId")
      VALUES ('${moment().format()}','${fee}',(SELECT id FROM "Account"
      WHERE "accountNumber" = '${accountNumber}'),
     '${tTypeData[0].id}') RETURNING "TransactionTime","Amount";`
    );

    res.send({
      message: "Money succesfuly withdrawn!",
      balance: updatedBalance,
      transaction,
      error: false,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: error, error: true });
  }
};
exports.transfer_money = async (req, res) => {
  try {
    let fee = req.params.fee;
    let accountFrom = req.params.accountFrom;
    let accountTo = req.params.accountTo;

    //Check if accFrom and accTo are the same
    if (accountFrom === accountTo) {
      return res.send({
        message: "Account From and To are the same!",
        error: true,
      });
    }

    //Check if accountTo exist

    let accTo = await db.any(
      `SELECT EXISTS
       (SELECT 1 FROM "Account" 
       WHERE "accountNumber" = '${accountTo}');`
    );

    if (!accTo[0].exists) {
      return res.send({ message: "Account To Doesnt exist!", error: true });
    }

    //Check if fee isnt bigger than current balance
    let balance = await db.any(
      `SELECT balance FROM "Account" 
       WHERE "accountNumber" = '${accountFrom}';`
    );

    if (
      fee >
      parseFloat(balance[0].balance.toString().substr(1).replace(/,/g, ""))
    ) {
      return res.send({ message: "Insufficent money!", error: true });
    }

    let updatedBalance = await db.any(
      `UPDATE "Account" SET balance = CASE
       WHEN "accountNumber" = '${accountFrom}' THEN balance - '${fee}'
       WHEN "accountNumber" = '${accountTo}' THEN balance + '${fee}'
       END
       WHERE "accountNumber" IN ('${accountFrom}','${accountTo}' ) RETURNING balance;`
    );

    //Inserting in transactions tables
    const tTypeData = await db.any(
      `INSERT INTO "TransactionType"("Code") VALUES ('transfer') RETURNING id ;`
    );
    const transaction = await db.any(
      `INSERT INTO "Transaction"
     ("TransactionTime","Amount","AccountFromId","AccountToId","TransactionTypeId")
       VALUES ('${moment().format()}','${fee}',(SELECT id FROM "Account"
       WHERE "accountNumber" = '${accountFrom}'),
      (SELECT id FROM "Account"
       WHERE "accountNumber" = '${accountTo}'),
     '${tTypeData[0].id}') RETURNING "TransactionTime","Amount";`
    );

    res.send({
      message: "Money succesfuly transfered!",
      balance: updatedBalance,
      transaction,
      error: false,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: error, error: true });
  }
};

exports.list_transactions = async (req, res) => {
  try {
    let accountNumber = req.params.accountNumber;

    const tData = await db.any(`SELECT t."TransactionTime",t."Amount",
       a."accountNumber" "AccountFrom",b."accountNumber" "AccountTo",c."Code"
       FROM "Transaction" as t
       INNER JOIN "Account" as a ON a.id = t."AccountFromId"
       LEFT JOIN "Account" as b ON b.id = t."AccountToId"
       INNER JOIN "TransactionType" as c ON c.id = t."TransactionTypeId"
       WHERE a."accountNumber" = '${accountNumber}' OR b."accountNumber" = '${accountNumber}';`);

    if (tData.length == 0) {
      res.send({ message: "No account find!", error: true });
    }

    res.send({ data: tData, error: false });
  } catch (error) {
    console.log(error);
    res.send({ message: error, error: true });
  }
};
