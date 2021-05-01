const { Account } = require('../models/schemas/account.schema');
const auth = require('../utils/auth.util');

const login = (req, res) => {
  const { username, password } = req.body;

  Account.findOne({ username }).then((account) => {
    if (password === account.password) {
      const token = auth.encodeToken(account.username);
      return res.status(200).json(token).end();
    }
    return res.status(413).json({ message: 'wrong password' }).end();
  });
};

// When registering an account the role is set.
// Make sure to make this admin only behaviour or users can register as admin.
const register = (req, res) => {
  const { username, password, role } = req.body;

  Account.create({ username, password, role })
    .then((account) => {
      const token = auth.encodeToken(account.username, account.role);
      return res.status(200).json(token).end();
    })
    .catch((error) => {
      return res.status(500).json(error).end();
    });
};

const whoAmI = (req, res) => {
  Account.findOne({ username: req.user.username }).then((account) => {
    return res
      .status(200)
      .json({ username: account.username, role: account.role })
      .end();
  });
};

const amIAdmin = (req, res) => {
  return res
    .status(200)
    .json({ message: 'Congrats! If you are reading this you are admin...' })
    .end();
};

module.exports = {
  login,
  register,
  whoAmI,
  amIAdmin
};
