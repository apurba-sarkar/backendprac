const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "error from backend";
  const addmessage = err.addmessage || "Error";

  return res.status(status).json({
    message,
    addmessage,
  });
};

module.exports = errorMiddleware;
