// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/meu-projeto', (req, res) => {
  res.send('Rota raiz');
});

router.get('/about', (req, res) => {
  res.send('Sobre nós');
});

module.exports = router;