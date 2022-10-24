import express from "express";
import ConvidadosController from "../controllers/ConvidadosController.js";

const router = express.Router();

router
  .get("/convidados", ConvidadosController.listarConvidados)
  .get("/convidados/:id", ConvidadosController.listarConvidadoPorId)
  .post("/convidados", ConvidadosController.cadastrarConvidado)
  // .put("/convidados/:id", ConvidadosController.atualizarConvidado)
  // .delete("/convidados/:id", ConvidadosController.excluirConvidado)

export default router;   