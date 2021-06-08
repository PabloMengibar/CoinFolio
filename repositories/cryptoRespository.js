const Porfolio = require("../models/Portfolio");
const Crypto = require("../models/Crypto")

exports.findCoinById = async (id) => {
  return await Crypto.findByPk(id);
};

exports.updateCoin = async (id, coinDetails) => {
  return await Crypto.update(coinDetails, { where: { id } });
};

exports.deleteCoin = async (id) => {
  return await Crypto.destroy({ where: { id } });
};