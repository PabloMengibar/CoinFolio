const jwt = require("jsonwebtoken");

const {SALT} = process.env;

const validateToken = (token) => {
  return jwt.verify(token, SALT);
};

const generateToken = (id, email, role) => {
  return jwt.sign({ id, email, role }, SALT, { expiresIn: "24h" });
};

module.exports = { generateToken, validateToken };
