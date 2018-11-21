'use strict'

function pruebas(req, res) {
    res.status(200).send({
        message: "Probando una acción del controlador del api rest con Node/Mongo"
    });
}

module.exports = {
    pruebas
};