const express = require('express');

const router = express.Router();

router.get('/singin', (req, res) => {
  return res.json('Sing in');
});

router.get('/singup', (req, res) => {
  return res.json('Sing up');
});

module.exports = router;
