const express = require('express');
const router = express.Router();
const csrf = require('csurf');

const request = require('../../app/controllers/requestUser');

const csrfProtection = csrf({ cookie: true });

router.post('/', request.post);
router.get('/', request.get);

module.exports = router;
