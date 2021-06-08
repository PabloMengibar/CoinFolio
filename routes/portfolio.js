const express = require("express");
const roleValidation = require("../middleware/roleValidation");
const router = express.Router();
const portFolioService = require("../services/portFolioService");


router.get("/all", async (req, res, next) => {
  try {
    const posts = await portFolioService.getAllPortfolios();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await portFolioService.getPortfolio(id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
});

router.post("/", roleValidation("user"), async (req, res, next) => {
  try {
    await portFolioService.createPortfolio(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", roleValidation("user"), async (req, res, next) => {
  try {
    const { id } = req.params;
    await portFolioService.editPortfolio(req.user, req.body, id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
