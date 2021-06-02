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

    noticiaCtrl.listarNoticias = async (req,res)=>{
        try{
            const arregloNoticias = await Noticia.find();
            res.status(200).json(arregloNoticias);
        }catch(e){
            console.log(e);
            res.status(404).json({
                mensaje: "no se puedo obtener los productos"
            })
        }
    }

    noticiaCtrl.eliminarNoticia = async (req,res) => {
        try{
            console.log(req.params);
            await Noticia.findByIdAndDelete(req.params.id);
            res.status(200).json({
                mensaje: "Se pudo eliminar noticia"
            });
        }catch(e){
            console.log(e);
            res.status(404).json({
                mensaje: "No se pudo eliminar la noticia"
            })
        }
    }

    noticiaCtrl.editarNoticia = async (req,res)=>{
        try{
            const noticiaBuscada = await Noticia.findByIdAndUpdate(req.params.id,req.body);
            res.status(200).json({
                mensaje: "el producto fue modificado"
            });
        }catch(e){
            console.log(e);
            res.status(404).json({
                mensaje: "No se puedo modificar la noticia"
            });
        }
    }
export default noticiaCtrl;