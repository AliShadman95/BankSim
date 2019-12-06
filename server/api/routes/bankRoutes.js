"use strict";
module.exports = app => {
  var bank = require("../controllers/bankController");
  app.route("/bank").get(bank.list_all_banks);
  app
    .route("/bank/:bankName")
    .post(bank.create_a_bank)
    .delete(bank.delete_a_bank);
  app.route("/person").get(bank.list_all_persons);
  app
    .route("/person/:personName")
    .post(bank.create_a_person)
    .delete(bank.delete_a_person);
  app.route("/account").get(bank.list_all_accounts);
  app
    .route("/account/:bankName/:personName")
    .post(bank.create_an_account)
    .delete(bank.delete_an_account);
  app.route("/account/deposit/:accountNumber/:fee").put(bank.deposit_money);
  app.route("/account/withdraw/:accountNumber/:fee").put(bank.withdraw_money);
  app
    .route("/account/transfer/:accountFrom/:accountTo/:fee")
    .put(bank.transfer_money);

  /* app.route("/messages/latest/:roomName").get(chat.get_latest_by_room);
  app.route("/messages/search/:searchValue").get(chat.search_messages_by_text);
  app
    .route("/messages/search/room/:roomName/:searchValue")
    .get(chat.search_messages_by_room);

  app.route("/messages/rooms/:roomName").get(chat.get_messages_by_room); */
};
