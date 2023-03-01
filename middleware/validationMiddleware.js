const { body } = require('express-validator');

const validator = () => {
  return [
    body('name')
      .isLength({ min: 1 })
      .trim()
      .escape()
      .withMessage('Please enter a name'),
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Please enter an email'),
  ];
};

module.exports = validator;
