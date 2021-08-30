const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.json(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE === "production" ? null : err.stack,
  });
};

module.exports = { notFound, errorHandler };
