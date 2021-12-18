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

  app.patch("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const valores = req.body
    Atendimentos.alterar(id, valores, res)
  })

  app.delete("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id)
    Atendimentos.deleta(id, res)
  })
}
