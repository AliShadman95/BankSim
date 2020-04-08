"use strict";
const db = require("../../db");

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
      allBanksData.find((bank) => {
        return bank.name == bankName;
      })
    ) {
      return res.send({ message: "Bank name already exist!", error: true });
    }

    let shouldSearch = true;
    //Here we loop till we find a bankCode that doesnt exist
    while (shouldSearch) {
      let bankCode = Math.floor(Math.random() * (7000 - 1000 + 1) + 1000);
      let results = allBanksData.find((bank) => {
        return bank.code == bankCode;
      });
      if (results) {
        continue;
      } else {
        shouldSearch = false;
        await db.any(
          `INSERT INTO "Bank"(code,name) VALUES (${bankCode},'${bankName}');`
        );
        res.send({ message: "Bank created!", code: bankCode, error: false });
      }
    }
  } catch (error) {
    console.log(error);
    res.send({ message: error, error: true });
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

exports.balance_of_bank = async (req, res) => {
  try {
    let bankName = req.params.bankName;

    const bankData = await db.any(
      `SELECT balance FROM "Account"
       INNER JOIN "Bank" ON "Account"."bankId" = "Bank".id
       WHERE "Bank".name = '${bankName}';`
    );
    if (bankData.length == 0) return res.send("$0.00");

    // Summing all balance of the bank
    const totalBalance =
      "$" +
      bankData
        .map((row) => {
          return parseFloat(row.balance.toString().substr(1).replace(/,/g, ""));
        })
        .reduce((a, b) => a + b)
        .toString();

    res.send(totalBalance);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
