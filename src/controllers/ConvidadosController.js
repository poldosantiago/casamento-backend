import convidados from "../models/Convidado.js";

class ConvidadosController {

  static listarConvidados(req, res){
    convidados.find((err, convidados) => {
      res.status(200).json(convidados)
  })
  }

  static listarConvidadoPorId(req, res){
    const id = req.params.id;

    convidados.findById(id, (err, convidados) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do convidado não localizado.`})
      } else {
        res.status(200).send(convidados);
      }
    })
  }

  static listarConvidadoPorNome(req, res){
    const nome = req.query.nome;

    convidados.find({'nome':nome}, (err, convidados) => {
      if(err) {
        res.status(400).send({message: `${err.message} - convidado não localizado.`})
      } else {
        res.status(200).send(convidados);
      } 
    })
  }


  static cadastrarConvidado(req, res){
    let convidado = new convidados(req.body);

    convidado.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar convidado.`})
      } else {
        res.status(201).send(convidado.toJSON())
      }
    })
  }
}

export default ConvidadosController


/*
static atualizarLivro = (req, res) => {
    const id = req.params.id;

    convidados.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Livro atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirLivro = (req, res) => {
    const id = req.params.id;

    convidados.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Livro removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }


*/