const moment = require("moment")
const conexao = require("../infraestrutura/conexao")

class Atendimento {
  adiciona(atendimento) {
    const query = "INSERT INTO Atendimentos SET ?"
    const data = moment(atendimento.data, "DD/MM/YYYY").format(
      "YYYY-MM-DD HH:MM:SS"
    )
    console.log(data)
    const data_criacao = moment().format("YYYY-MM-DD HH:MM:SS")
    const atendimentoDatado = { ...atendimento, data_criacao, data }
    conexao.query(query, atendimentoDatado, (err, results) => {
      if (err) {
        console.log(err)
      } else {
        console.log(results)
      }
    })
  }
}

module.exports = new Atendimento()
