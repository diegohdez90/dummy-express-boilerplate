const express = require('express');
const router = express.Router();

const home = require('../../app/controllers/home');

router.get('/', home.index);

module.exports = router;
