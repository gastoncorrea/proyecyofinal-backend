import Usuario from '../models/usuario';

const usuarioCtrl = {};

usuarioCtrl.nuevoUsuario = async (req,res) => {
    try{
        const usuarioCreado = new Usuario({
            nombre: req.body.nombre,
            fecha: req.body.fecha,
            email: req.body.email,
            contrasenia: req.body.contrasenia,
            aceptar: req.body.aceptar
        })

        await usuarioCreado.save();
        res.status(201).json({
            mensaje: "usuario creado"
        })
    }catch(e){
        console.log(e);
        res.status(500).json({
            mensaje: "Error al agregar el usuario"
    })
}
}

export default usuarioCtrl;