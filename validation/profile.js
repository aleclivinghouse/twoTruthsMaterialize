const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.skills = !isEmpty(data.skills) ? data.skills : '';

  if (!Validator.isLength(data.bio, { min: 2, max: 40 })) {
    errors.handle = 'Bio needs to between 2 and 40 characters';
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = 'Skills field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
