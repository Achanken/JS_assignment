import mongoose from 'mongoose';

const errorHandler = (err, req, res, _next) => {
  const statusCode = err.statusCode || 500;
  const response = {
    status: statusCode < 500 ? 'fail' : 'error',
    message: err.message || 'Internal Server Error'
  };

  if (err instanceof mongoose.Error.ValidationError) {
    response.message = Object.values(err.errors)
      .map((validationError) => validationError.message)
      .join('; ');
    return res.status(400).json(response);
  }

  if (err instanceof mongoose.Error.CastError) {
    response.message = 'Invalid identifier format';
    return res.status(400).json(response);
  }

  res.status(statusCode).json(response);
};

export default errorHandler;
