import express from "express";
import convidados from "./convidadosRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Base casamento"})
  })

  app.use(
    express.json(),
    convidados
  )
}

export default routes