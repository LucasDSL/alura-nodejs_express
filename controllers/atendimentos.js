const Atendimentos = require("../models/atendimentos")

module.exports = app => {
  app.get("/atendimentos", (req, res) =>
    res.send("Server running - appointments")
  )

  app.post("/atendimentos", (req, res) => {
    const atendimentoAtual = req.body
    Atendimentos.adiciona(atendimentoAtual, res)
    res.send("Dados recebidos")
  })
}
