const express = require('express');
const router = express.Router();
const cryptos = require('../Cryptos');
const uuid = require('uuid');

router.get('/', (req, res) => {
  console.log(req.body);
  res.json(cryptos);
});

router.get('/:id', (req, res) => {
  const find = cryptos.some((crypto) => crypto.id === parseInt(req.params.id));

  if (find) {
    res.json(cryptos.filter((crypto) => crypto.id === parseInt(req.params.id)));
  } else {
    res
      .status(400)
      .json({ message: `Crypto with id ${req.params.id} not found` });
  }
});

router.post('/', (req, res) => {
  const newCrypto = {
    id: uuid.v4(),
    name: req.body.name,
    price: req.body.price,
  };

  if (newCrypto.name && newCrypto.price) {
    cryptos.push(newCrypto);
    res.json({ message: 'New crypto is added', cryptos });
  } else {
    res
      .status(400)
      .json({ message: 'New crypto entry requires both name and price' });
  }
});

router.put('/:id', (req, res) => {
  const find = cryptos.some((crypto) => crypto.id === parseInt(req.params.id));

  if (find) {
    updateCrypto = req.body;
    cryptos.forEach((crypto) => {
      if (crypto.id === parseInt(req.params.id)) {
        crypto.name = updateCrypto.name ? updateCrypto.name : crypto.name;
        crypto.price = updateCrypto.price ? updateCrypto.price : crytpo.price;
      }
      res.json({ message: `Crypto with id ${req.params.id} updated`, cryptos });
    });
  } else {
    res
      .status(400)
      .json({ message: `Crypto with id ${req.params.id} not found` });
  }
});

router.delete('/:id', (req, res) => {
  const find = cryptos.some((crypto) => crypto.id === parseInt(req.params.id));

  if (find) {
    res.json({
      message: 'Crypto deleted',
      cryptos: cryptos.filter(
        (crypto) => crypto.id !== parseInt(req.params.id)
      ),
    });
  } else {
    res
      .status(400)
      .json({ message: `Crypto with id ${req.params.id} not found` });
  }
});

module.exports = router;
