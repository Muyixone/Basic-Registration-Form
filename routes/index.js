const express = require('express');

const validator = require('../middleware/validationMiddleware');
const { getIndexPage, postForm, getData } = require('../controller/index');

const router = express.Router();

router.get('', getIndexPage).post('', validator(), postForm);
router.get('/registration', getData);

module.exports = router;
