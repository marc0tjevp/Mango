const { Person } = require('../models/schemas/person.schema');

const getAllPersons = (req, res) => {
  Person.find({})
    .exec()
    .then((persons) => {
      return res.status(200).json(persons).end();
    })
    .catch((error) => {
      return res.status(500).json(error).end();
    });
};

const createPerson = (req, res) => {
  const { name, age, email } = req.body;

  Person.create({
    name,
    age,
    email
  })
    .then((p) => {
      return res.status(200).json(p).end();
    })
    .catch((error) => {
      return res.status(500).json(error).end();
    });
};

module.exports = {
  getAllPersons,
  createPerson
};
