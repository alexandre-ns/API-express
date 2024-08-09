const productschema = require('../../validation/productValidation')
const {
  body,
  param,
  validationResult,
  checkSchema,
} = require("express-validator");

const productMiddleware = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    var validatorInfos = errors.array()[0].msg;
    return res.status(400).json({ error: validatorInfos });
  }
  next();
};

module.exports = productMiddleware;
