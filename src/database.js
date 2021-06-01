import mongoose from 'mongoose';

const url = 'mongodb://localhost:27017/proyectofinal';

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true});

const conexion = mongoose.connection;

//mostrar mensaje de conexion en la terminal

conexion.once('open',()=>{
    console.log('base de datos conectada');
})