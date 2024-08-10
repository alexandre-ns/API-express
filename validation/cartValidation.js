const cartValidationID = {
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

const cartValidationAll = {
  'products.*.product': {
    in: ['body'],
    isMongoId: {
      errorMessage: 'Invalid product ID'
    },
    notEmpty: {
      errorMessage: 'Product ID is required'
    },
    optional: false
  },
  'products.*.quantity': {
    in: ['body'],
    isInt: {
      errorMessage: 'Quantity must be greater than 0',
      options: { min: 1 }
    },
    notEmpty: {
      errorMessage: 'Quantity is required'
    },
    optional: false
  },
  user: {
    isMongoId: {
      errorMessage: 'Invalid User ID'
    },
    notEmpty: {
      errorMessage: 'User ID is required'
    }
  }
};

const cartValidationSome = {
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
    notEmpty: {
      errorMessage: 'Product ID is required'
    }
  },
  'products.*.quantity': {
    in: ['body'],
    isInt: {
      errorMessage: 'Quantity must be greater than 0',
      options: { min: 1 }
    },
    notEmpty: {
      errorMessage: 'Quantity is required'
    }
  },
  user: {
    isMongoId: {
      errorMessage: 'Invalid User ID'
    },
    notEmpty: {
      errorMessage: 'User ID is required'
    }
  }
};
module.exports = {
  cartValidationID,
  cartValidationAll,
  cartValidationSome
};
