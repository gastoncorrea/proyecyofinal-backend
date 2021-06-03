import mongoose, {Schema} from 'mongoose';

const noticiaSchema = new Schema({
    titulo:{
        type: String,
        required: true,
        unique: true,
        maxlength: 200
    },
    subtitulo:{
        type: String,
        required: true,
        unique: true,
        maxlength: 200
    },
    categoria:{
        type: String,
        required: true,
    },
    detalle:{
        type: String,
        required: true,
        unique: true,
        maxlength: 9000
    },
    link:{
        type: String,
        required: true,
        unique: true,
        maxlength: 200
    },
    autor:{
        type: String,
        required: true,
        maxlength: 30
    },
    fecha:{
        type: Date,
        required: true,
        maxlength: 10
    },
    destacar:{
        type: String
    }
    
});

const Noticia = mongoose.model('noticia',noticiaSchema);

export default Noticia;