const conexion = require('./cone_base_datos')

module.exports = app => {
    const connect = conexion

    app.post('/registro_datos', (req, res) => {
        const cedula = req.body.cedula
        const apellidos = req.body.apellidos
        const nombres = req.body.nombres
        const direccion = req.body.direccion
        const telefono = req.body.telefono
        const correo = req.body.correo

        connect.query('insert into clientes SET ?', {
            cedula, apellidos, nombres, direccion, telefono, correo
        }, (error, resultado) => {
            res.redirect('/registro')
        })
    })
}