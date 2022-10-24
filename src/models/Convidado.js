import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    email: {type: String, required: true},
    telefone: {type: String, required: true},
    adultos: {type: Number, required: true},
    criancas: {type: Number, required: true},
    modelo: {type: String},
    condutor: {type: String},
    placa: {type: String}
  }
);

const convidados = mongoose.model('convidados', livroSchema);
export default convidados;