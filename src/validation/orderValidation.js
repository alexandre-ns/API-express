const orderValidationID = {
  id: {
    in: ['params'],
    isMongoId: {
      errorMessage: 'Invalid Cart ID'
    },
    notEmpty: {
      errorMessage: 'Cart ID is required'
    }
  }
};

const orderValidationAll = {
  'products.*.product': {
    in: ['body'],
    isMongoId: {
      errorMessage: 'Invalid product ID'
    }
  },
  'products.*.name': {
    in: ['body'],
    errorMessage: 'Product name is required'
  },
  'products.*.quantity': {
    in: ['body'],
    isInt: {
      errorMessage: 'Quantity must be greater than 0',
      options: { min: 1 }
    }
  },
  user: {
    isMongoId: {
      errorMessage: 'Invalid User ID'
    },
    notEmpty: {
      errorMessage: 'User ID is required'
    }
  },
  totalAmount: {
    in: ['body'],
    isInt: {
      options: { gt: 0 }
    },
    errorMessage: 'Quantity stock must be greater than 0',
    optional: true
  },
  status: {
    in: ['body'],
    isIn: {
      options: [['pending', 'shipped', 'delivered']],
      errorMessage: 'Status must be pending, shipped, delivered'
    },
    optional: true
  }
};

const orderValidationSome = {
  id: {
    in: ['params'],
    isMongoId: {
      errorMessage: 'Invalid Cart ID'
    },
    notEmpty: {
      errorMessage: 'Cart ID is required'
    }
  },
  'products.*.product': {
    in: ['body'],
    isMongoId: {
      errorMessage: 'Invalid product ID'
    },
    optional: true
  },
  'products.*.name': {
    in: ['body'],
    errorMessage: 'Product name is required',
    optional: true
  },
  'products.*.quantity': {
    in: ['body'],
    isInt: {
      errorMessage: 'Quantity must be greater than 0',
      options: { min: 1 }
    },
    optional: true
  },
  user: {
    isMongoId: {
      errorMessage: 'Invalid User ID'
    },
    optional: true
  },
  totalAmount: {
    in: ['body'],
    isInt: {
      options: { gt: 0 }
    },
    errorMessage: 'Quantity stock must be greater than 0',
    optional: true
  },
  status: {
    in: ['body'],
    isIn: {
      options: [['pending', 'shipped', 'delivered']],
      errorMessage: 'Status must be pending, shipped, delivered'
    },
    optional: true
  }
};

module.exports = {
  orderValidationID,
  orderValidationAll,
  orderValidationSome
};
