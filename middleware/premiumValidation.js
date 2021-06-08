const HttpError = require("../utils/httpError");

const premiumValidation = (req, res, next) => {
  if (req.user?.role !== "premium") throw new HttpError(401);
  next();
};

module.exports = premiumValidation;
