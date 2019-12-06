"use strict";
module.exports = app => {
  var bank = require("../controllers/bankController");
  var person = require("../controllers/personController");
  var account = require("../controllers/accountController");
  var transaction = require("../controllers/transactionController");
  app.route("/bank").get(bank.list_all_banks);
  app
    .route("/bank/:bankName")
    .post(bank.create_a_bank)
    .delete(bank.delete_a_bank);
  app.route("/bank/balance/:bankName").get(bank.balance_of_bank);
  app.route("/person").get(person.list_all_persons);
  app
    .route("/person/:personName")
    .post(person.create_a_person)
    .delete(person.delete_a_person);

  app
    .route("/account/:bankName/:personName")
    .post(account.create_an_account)
    .delete(account.delete_an_account);
  app.route("/account/balance/:accountNumber").get(account.balance_of_account);

  app
    .route("/account/transactions/:accountNumber")
    .get(transaction.list_transactions);
  app
    .route("/account/deposit/:accountNumber/:fee")
    .put(transaction.deposit_money);
  app
    .route("/account/withdraw/:accountNumber/:fee")
    .put(transaction.withdraw_money);
  app
    .route("/account/transfer/:accountFrom/:accountTo/:fee")
    .put(transaction.transfer_money);

  app
    .route("/account/list/person/:personName")
    .get(account.list_all_accounts_person);
  app.route("/account/list/bank/:bankName").get(account.list_all_accounts_bank);
};
