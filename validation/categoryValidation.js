const categoryValidationID = {
  id: {
    in: ['params'],
    isMongoId: {
      errorMessage: 'Invalid Category ID'
    },
    notEmpty: {
      errorMessage: 'Category ID is required'
    }
  }
};

const categoryValidationAll = {
  name: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'Category name is required'
  }
};

const categoryValidationSome = {
  id: {
    in: ['params'],
    isMongoId: {
      errorMessage: 'Invalid Category ID'
    },
    notEmpty: {
      errorMessage: 'Category ID is required'
    }
  },
  name: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'Category name is required',
    optional: false
  }
};

module.exports = {
  categoryValidationID,
  categoryValidationAll,
  categoryValidationSome
};
