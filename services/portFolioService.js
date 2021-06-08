const portfolioRepository = require("../repositories/portfolioRepository");
const checkOwnership = require("../utils/checkOwnership");
const HttpError = require("../utils/httpError");
const { updatePortfolioSchema } = require("../validations/portfolioValidation");

exports.getPortfolio = async (id) => {
  const portfolio = await portfolioRepository.findPortfolioById(id);
  return portfolio.toJSON();
};

exports.getAllPortfolios = async () => {
  return await portfolioRepository.findAllPortfolios();
};

exports.createPortfolio = async (portfolio) => {
  if (!portfolio.title || !portfolio.type) {
    throw new HttpError(400,"Miss title");
  }
  await portfolioRepository.insertPortfolio(portfolio);
};

exports.editPortfolio = async (user, portfolioDetails, portfolioId) => {
  const portfolio = await portfolioRepository.findPortfolioById(portfolioId);

  if (!checkOwnership(portfolio, user)) throw new HttpError(401);

  const validationData = await updatePortfolioSchema.validateAsync(portfolioDetails);

  await portfolioRepository.updatePortfolio(portfolioId, validationData);
};
