"use strict";
const db = require("../../db");

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
