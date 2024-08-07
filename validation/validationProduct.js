const { body, param, validationResult } = require("express-validator");

const productValidation = [
  param("id")
    .notEmpty()
    .withMessage({
      message: "O id do produto é obrigatório",
      code: "ID_REQUIRED",
    }),

  param("id")
    .isLength(24)
    .withMessage({
      message: "O id do produto contém formato incorreto",
      code: "ID_INVALID"
    })
  /*body("price")
    .isFloat({ gt: 0 })
    .withMessage("O preço deve ser um número maior que 0"),

  body("category")
    .notEmpty()
    .withMessage("A categoria do produto é obrigatória"),*/
];


module.exports = productValidation;

