import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    email: {type: String, required: true},
    telefone: {type: String, required: true},
    adultos: {type: Number, required: true},
    criancas: {type: Number, required: true},
    modelo: {type: String, required: true},
    condutor: {type: String, required: true},
    placa: {type: String, required: true}
  }
);

const convidados= mongoose.model('convidados', livroSchema);
export default convidados;