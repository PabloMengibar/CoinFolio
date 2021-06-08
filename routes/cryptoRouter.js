const express = require('express')
const router = express.Router();
const Crypto = require('../models/Crypto');
const cryptoServices = require('../services/cryptoServices')
const roleValidation = require("../middleware/roleValidation");
const axios = require('axios')

 router.get("/:coin", async (req, res, next)=>{
    const {coin}=req.params;
    const {data}=await axios.get(
        `https://api.binance.com/api/v3/ticker/price?symbol=${coin.toUpperCase()}USDT`
    ) 
    res.status(200).json({message: `${coin}/${data.price} USDT`});
    res.status(500).json({message:error.message})

 })

 router.post("/", async(req, res)=>{
    const crypto = await Crypto.create(req.body)
    res.json(crypto);
 })

 router.put("/:id", roleValidation("user"), async (req, res, next) => {
    try {
      const { id } = req.params;
      await cryptoServices.editCrypto(req.user, req.body, id);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  });


  router.delete("/:id", roleValidation("user"), async (req, res) => {
    try {
      const { id } = req.params;
      await cryptoServices.deleteCrypto(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
module.exports = router;
