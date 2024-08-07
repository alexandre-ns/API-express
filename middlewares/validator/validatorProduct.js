const { body, param, validationResult } = require("express-validator");

const validateProduct = (req, res, next) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    var validatorInfos = errors.array()[0].msg;
    if (validatorInfos.code == "ID_REQUIRED") {
      res.status(400).json({ message: validatorInfos.msg.message });
    } else if (validatorInfos.code == "ID_INVALID") {
      res.status(404).json({ message: validatorInfos.message });
    } else {
      next(errors); //passa para o middleware de tratamento de erros global
    }
  }
   
};

module.exports = validateProduct;

