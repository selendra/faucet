const express = require('express');
const { claimTestnet } = require('../controllers/claim');

const router = express.Router();

router
  .route('/testnet')
  .post(claimTestnet)

module.exports = router;