require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.use(express.json());


console.log('Mongo URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(3000, () => {
      console.log('Servidor en puerto 3000');
    });
  })
  .catch(err => console.error('Error de conexión:', err));
