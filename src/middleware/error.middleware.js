const logger = require("../logger");

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
}
function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: "Something failed!" });
  } else {
    next(err);
  }
}
function logErrors(err, req, res, next) {
  logger.crit(err.stack);
  next(err);
}

module.exports = {
  errorHandler: errorHandler,
  clientErrorHandler: clientErrorHandler,
  logErrors: logErrors,
};
