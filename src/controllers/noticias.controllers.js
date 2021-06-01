import Noticia from '../models/noticia';
const noticiaCtrl = {};

noticiaCtrl.getPrueba = (req,res)=>{
    res.send('hola esta es una prueba del backend');
}

noticiaCtrl.nuevaNoticia = async (req,res)=>{
    // console.log(req.body);
    // res.send('prueba de post');
    try{
        const noticiaCreada = new Noticia({
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            categoria: req.body.categoria,
            detalle: req.body.detalle,
            link: req.body.link,
            autor:req.body.autor,
            fecha: req.body.fecha,
            destacar: req.body.destacar
        })

        await noticiaCreada.save();
        res.status(201).json({
            mensaje: "producto agregado correctamente"
        })
    }catch(e){
        console.log(e);
        res.status(500).json({
            mensaje: "Error al agregar producto"
        })
    }
}

export default noticiaCtrl;