const Atendimentos = require("../models/atendimentos")

module.exports = app => {
  app.get("/atendimentos", (req, res) => {
    Atendimentos.listar(res)
  })
  app.get("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id)
    Atendimentos.buscaPorId(id, res)
  })

  app.post("/atendimentos", (req, res) => {
    const atendimentoAtual = req.body
    Atendimentos.adiciona(atendimentoAtual, res)
  })
}
