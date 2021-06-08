const HttpError = require("../utils/httpError");

const roleValidation = (role) => {
  const roles = Array.isArray(role) ? role : [role];
  return (req, res, next) => {
    if (![...roles, "user"].includes(req.user?.role)) throw new HttpError(401);
    next();
  };
};
module.exports = roleValidation;
