const Atendimentos = require("../models/atendimentos")

module.exports = app => {
  app.get("/atendimentos", (req, res) => {
    Atendimentos.listar(res)
  })

  app.post("/atendimentos", (req, res) => {
    const atendimentoAtual = req.body
    Atendimentos.adiciona(atendimentoAtual, res)
  })
}
