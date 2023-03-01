const { validationResult } = require('express-validator');
const Registration = require('../models/register');

const getIndexPage = (req, res) => {
  res.render('form', {
    title: 'I got this!',
  });
};

const getData = async (req, res) => {
  const users = await Registration.find();
  return res.render('index', {
    title: 'Registered users',
    users,
  });
};

const postForm = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render('form', {
      errors: errors.array(),
      title: 'I got this!',
      data: req.body,
    });
  }

  const registration = new Registration(req.body);
  registration
    .save()
    .then(() => {
      return res.send('Thank you for registering');
    })
    .catch(() => {
      return res.send('Sorry, something went wrong!');
    });
};

module.exports = { getIndexPage, getData, postForm };
