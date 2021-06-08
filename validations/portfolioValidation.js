const Joi = require("joi");

const updatePortfolioSchema = Joi.object({
  name: Joi.string().max(35),
  quantity: Joi.number(),
});

module.exports = { updatePortfolioSchema };
