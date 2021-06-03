import mongoose, {Schema} from 'mongoose';

const usuarioSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        maxlength:50
    },
    fecha:{
        type: Date,
        required: true,
        maxlength: 10
    },
    email:{
        type: String,
        required: true,
        unique: true,
        maxlength: 50
    },
    contrasenia:{
        type: String,
        required: true,
        maxlength: 50
    },
    aceptar:{
        type: String
    }
});

const Usuario = mongoose.model('usuario', usuarioSchema);

export default Usuario;

