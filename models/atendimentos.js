const moment = require("moment")
const conexao = require("../infraestrutura/conexao")

class Atendimento {
  adiciona(atendimento, res) {
    const query = "INSERT INTO Atendimentos SET ?"
    const data = moment(atendimento.data, "DD/MM/YYYY").format(
      "YYYY-MM-DD HH:MM:SS"
    )
    console.log(data)
    const data_criacao = moment().format("YYYY-MM-DD HH:MM:SS")
    const atendimentoDatado = { ...atendimento, data_criacao, data }
    conexao.query(query, atendimentoDatado, (err, results) => {
      if (err) {
        res.sendStatus(400).json(err)
      } else {
        res.sendStatus(201).json(results)
      }
    })
  }
}

module.exports = new Atendimento()
