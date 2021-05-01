const jwt = require('jwt-simple');
const moment = require('moment');
const { Account } = require('../models/schemas/account.schema');
const config = require('../config/config.json');

const encodeToken = (username, role) => {
  const payload = {
    exp: moment().add(2, 'days').unix(),
    iat: moment.unix(),
    sub: {
      username,
      role
    }
  };

  return jwt.encode(payload, config.secret);
};

const decodeToken = (token) => {
  try {
    return jwt.decode(token, config.secret);
  } catch (error) {
    return 'invalid';
  }
};

const getUserRole = async (username) => {
  return Account.findOne({ username }).then((account) => {
    return account.role;
  });
};

const validate = (res, decodedToken) => {
  const now = moment.unix();

  // Is token valid?
  if (decodedToken === 'invalid') {
    return res
      .status(401)
      .json({ message: 'token invalid, please log in again' })
      .end();
  }

  // Is token expired?
  if (now > decodedToken.exp) {
    return res
      .status(401)
      .json({ message: 'Token expired, please log in again' })
      .end();
  }

  // Has token been tampered with?
  if (decodedToken.iat > now) {
    return res
      .status(401)
      .json({ message: 'Token invalid, please log in again' })
      .end();
  }
};

const requireUser = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    const decodedToken = decodeToken(token);

    // Check token payload
    validate(res, decodedToken);

    // Set the username
    req.user = decodedToken.sub;

    // Continue request
    next();
  }

  // No token found
  else {
    return res.status(401).json({ message: 'please provide token' }).end();
  }
};

const requireAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    const decodedToken = decodeToken(token);

    // Check token payload
    validate(res, decodedToken);

    // Check user role
    getUserRole(decodedToken.sub.username).then((role) => {
      if (role === 'admin') {
        req.user = decodedToken.sub;
        return next();
      }
      return res
        .status(401)
        .json({ message: 'This endpoint requires the admin role' });
    });
  }
  // No token found
  else {
    return res.status(401).json({ message: 'please provide token' }).end();
  }
};

module.exports = {
  encodeToken,
  decodeToken,
  requireUser,
  requireAdmin
};
