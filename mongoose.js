const mongoose = require('mongoose');
//const AutoIncrement = require('mongoose-sequence')(mongoose);

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('MongoDB conectado com sucesso');
    } catch (err) {
      console.error('Erro ao conectar MongoDB', err);
      process.exit(1); // Encerrar o processo com falha
    }
  };

  module.exports = connectDB;