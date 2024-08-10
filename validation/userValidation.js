const userValidationID = {
  id: {
    in: ["params"],
    isMongoId: {
      errorMessage: "Invalid user ID",
    },
    notEmpty: {
      errorMessage: "User ID is required",
    }
  }
};

const userValidationAll = {
  username: {
    in: ["body"],
    notEmpty: true,
    errorMessage: "User name is required",
  },
  password: {
    in: ["body"],
    isLength: {
      options: { min: 8 },
      errorMessage: "Password must be at least 8 characters long",
    },
    notEmpty: {
      errorMessage: "Password is required",
    }
  }
};

const userValidationSome = {
  id: {
    in: ["params"],
    isMongoId: {
      errorMessage: "Invalid product ID",
    },
    notEmpty: {
      errorMessage: "Product ID is required",
    },
  },
  username: {
    in: ["body"],
    notEmpty: true,
    errorMessage: "Product name is required",
  },
  password: {
    in: ["body"],
    isLength: {
      options: { min: 8 },
      errorMessage: "Password must be at least 8 characters long",
    },
    notEmpty: {
      errorMessage: "Password is required",
    }
  }
};

module.exports = {
  userValidationID,
  userValidationAll,
  userValidationSome,
};
