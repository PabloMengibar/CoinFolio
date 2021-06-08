const Porfolio = require("../models/Portfolio");
const Crypto = require("../models/Crypto")

exports.findAllPortfolios = async () => {
  return await Porfolio.findAll();
};

exports.findPortfolioById = async (id) => {
  return await Porfolio.findByPk(id, {include:Crypto});
};

exports.insertPortfolio = async (portfolio) => {
  return await Porfolio.create(portfolio);
};

exports.updatePortfolio = async (id, portfolioDetails) => {
  return await Porfolio.update(portfolioDetails, { where: { id } });
};

exports.deletePortfolio = async (id) => {
  return await Porfolio.destroy({ where: { id } });
};
