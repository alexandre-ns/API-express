const productValidationID = {
  id: {
    in: ["params"],
    isMongoId: {
      errorMessage: "Invalid product ID",
    },
    notEmpty: {
      errorMessage: "Product ID is required",
    }
  }
};

const productValidationAll = {
  name: {
    in: ["body"],
    notEmpty: true,
    errorMessage: "Product name is required",
  },
  price: {
    in: ["body"],
    isFloat: {
      options: { gt: 0 },
    },
    errorMessage: "Price must be greater than 0",
  },
  quantityStock: {
    in: ["body"],
    isInt: {
      options: { gt: 0 },
    },
    errorMessage: "Quantity stock must be greater than 0",
  },
  category: {
    in: ["body"],
    isMongoId: {
      errorMessage: "Invalid category ID",
    },
    optional: true,
  }
};

const productValidationSome = {
  id: {
    isMongoId: {
      errorMessage: "Invalid product ID",
    },
    notEmpty: {
      errorMessage: "Product ID is required",
    },
  },
  name: {
    in: ["body"],
    notEmpty: true,
    errorMessage: "Product name is required",
    optional: true,
  },
  price: {
    in: ["body"],
    isFloat: {
      options: { gt: 0 },
    },
    errorMessage: "Price must be greater than 0",
    optional: true,
  },
  quantityStock: {
    in: ["body"],
    isInt: {
      options: { gt: 0 },
    },
    errorMessage: "Quantity stock must be greater than 0",
    optional: true,
  },
  category: {
    in: ["body"],
    isMongoId: {
      errorMessage: "Invalid category ID",
    },
    optional: true,
  },
};

module.exports = {
  productValidationID,
  productValidationAll,
  productValidationSome
};

