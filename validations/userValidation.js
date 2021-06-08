const Joi = require("joi");

const updateSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().min(4),
  name: Joi.string(),
});

module.exports = { updateSchema };
