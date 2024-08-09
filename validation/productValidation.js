const productValidationID = {
  id: {
    in: ["params"],
    errorMessage: "erro no id",
    isLength: {options: { min: 24, max: 24 }}
  }
};

const productValidationAll = {
  name: {
    in: ["body"],
    notEmpty: true,
    errorMessage: "erro no campo nome",
  },
  price: {
    in: ["body"],
    isFloat: {
      options: { gt: 0 },
    },
    errorMessage: "erro no campo preço",
  },
  quantityStock: {
    in: ["body"],
    isInt: {
      options: { gt: 0 },
    },
    errorMessage: "erro no campo quantidade",
  },
  category: {
    in: ["body"],
    isLength: {options: { min: 24, max: 24 }},
    errorMessage: "erro no campo categoria",
  },
};

const productValidationSome = {
  id: {
    in: ["params"],
    notEmpty: true,
    errorMessage: "erro no campo id",
  },
  name: {
    in: ["body"],
    notEmpty: true,
    errorMessage: "erro no campo nome",
    optional: true,
  },
  price: {
    in: ["body"],
    isFloat: {
      options: { gt: 0 },
    },
    errorMessage: "erro no campo preço",
    optional: true,
  },
  quantityStock: {
    in: ["body"],
    isInt: {
      options: { gt: 0 },
    },
    errorMessage: "erro no campo quantidade",
    optional: true,
  },
  category: {
    in: ["body"],
    isLength: {options: { min: 24, max: 24 }},
    errorMessage: "erro no campo categoria",
    optional: true,
  },
};

module.exports = {
  productValidationID,
  productValidationAll,
  productValidationSome
};

