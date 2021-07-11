const express = require('express');
const router = express.Router();
const cryptos = require('../Cryptos');

router.get('/', (req, res) => {
  console.log(req.body);
  res.json(cryptos);
});

module.exports = router;
