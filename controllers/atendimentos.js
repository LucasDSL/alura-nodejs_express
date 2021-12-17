const Atendimentos = require("../models/atendimentos")

module.exports = app => {
  app.get("/atendimentos", (req, res) =>
    res.send("Server running - appointments")
  )

  app.post("/atendimentos", (req, res) => {
    Atendimentos.adiciona(req.body)
    res.send("Dados recebidos")
  })
}
