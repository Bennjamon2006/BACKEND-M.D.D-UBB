const { sendError } = require("../handlers/responseHandler");

function validarDatos(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);

    if (error) {
      return sendError(
        res,
        "Error en validación de datos",
        400,
        error.details.map((err) => err.message),
      );
    }

    // Reemplazamos el cuerpo de la solicitud con los datos validados
    req.body = value;
    next();
  };
}

module.exports = validarDatos;
