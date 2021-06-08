const cryptoRepository = require("../repositories/cryptoRespository");
const HttpError = require("../utils/httpError");
const { updatePortfolioSchema } = require("../validations/portfolioValidation");

exports.getCrypto = async (id) => {
  const crypto = await cryptoRepository.findCoinById(id);
  return crypto.toJSON();
};

exports.getAllCrypto = async () => {
  return await cryptoRepository.findAllCrypto();
};


exports.editCrypto = async (user, cryptoDetails, cryptoId) => {
  const crypto = await cryptoRepository.findCoinById(cryptoId);
  // if (!checkOwnership(crypto, user)) throw new HttpError(401);
  const validationData = await updatePortfolioSchema.validateAsync(cryptoDetails);
  await cryptoRepository.updateCoin(cryptoId, validationData);
};

exports.deleteCrypto = async (id) => {
  await cryptoRepository.deleteCoin(id);
};