// middleware/errorMiddleware.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log de error
    res.status(500).send('Algo salió mal!');
  };
  
  module.exports = { errorHandler };
  