/*Errors thrown in the application layer (service) and caught in the presentation layer (controller).*/

//error class, include status code

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFound";
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "Validation";
  }
}

module.exports = {
  NotFoundError,
  ValidationError
};
