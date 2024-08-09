const categoryValidationID = {
  id: {
    in: ["params"],
    errorMessage: "erro no campo id",
    isLength: { options: { min: 24, max: 24 } },
  },
};


const categoryValidationAll = {
  name: {
    in: ["body"],
    notEmpty: true,
    errorMessage: "erro no campo nome",
  }
};

const categoryValidationSome = {
  id: {
    in: ["params"],
    notEmpty: true,
    errorMessage: "erro no campo id",
  },
  name: {
    in: ["body"],
    notEmpty: true,
    errorMessage: "erro no campo nome",
    optional: false,
  },
};