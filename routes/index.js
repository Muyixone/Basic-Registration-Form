const express = require('express');
const path = require('path');
const auth = require('http-auth');
const authConnect = require('http-auth-connect');

const basic = auth.basic({
  file: path.join(__dirname, '../users.htpasswd'),
});

const validator = require('../middleware/validationMiddleware');
const { getIndexPage, postForm, getData } = require('../controller/index');

const router = express.Router();

router.get('', getIndexPage).post('', validator(), postForm);
router.get('/registration', authConnect(basic), getData);

module.exports = router;
