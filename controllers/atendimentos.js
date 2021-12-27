const Atendimentos = require("../models/atendimentos")
const axios = require("axios")

module.exports = app => {
  app.get("/atendimentos", (req, res) => {
    Atendimentos.listar()
      .then(async results => {
        res.json(results)
      })
      .catch(error => res.status(400).json(error))
  })
  app.get("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id)
    Atendimentos.buscaPorId(id)
      .then(async results => {
        const atendimento = results[0]
        const cpf = atendimento.Cliente
        const { data } = await axios.get(`http://localhost:8082/${cpf}`)
        atendimento.Cliente = data
        res.json(atendimento)
      })
      .catch(error => res.status(400).json(error))
  })

  app.post("/atendimentos", (req, res) => {
    const atendimentoAtual = req.body
    Atendimentos.adiciona(atendimentoAtual)
      .then(atendimentoCadastrado => res.json(atendimentoCadastrado))
      .catch(error => res.status(400).json(error))
  })

  app.patch("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const valores = req.body
    Atendimentos.alterar(id, valores)
      .then(results => {
        res.json({ ...valores, id })
      })
      .catch(error => res.status(400).json(error))
  })

  app.delete("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id)
    Atendimentos.deleta(id)
      .then(results => res.json(results))
      .catch(error => res.status(400).json(error))
  })
}
