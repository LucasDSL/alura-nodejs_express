const conexao = require("../infraestrutura/conexao")

class Atendimento {
  adiciona(atendimento) {
    const query = "INSERT INTO Atendimentos SET ?"

    conexao.query(query, atendimento, (err, results) => {
      if (err) {
        console.log(err)
      } else {
        console.log(results)
      }
    })
  }
}

module.exports = new Atendimento()
