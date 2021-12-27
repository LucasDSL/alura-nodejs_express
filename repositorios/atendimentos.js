const query = require("../infraestrutura/database/queries")

class Atendimento {
  adiciona(atendimento) {
    const sql = "INSERT INTO Atendimentos SET ?"
    return query(sql, atendimento)
  }

  listar() {
    const sql = `SELECT * FROM atendimentos`
    return query(sql)
  }

  buscarPorId(id) {
    const sql = ""
  }

  alterar(id, valores) {}

  deleta(id) {}
}

module.exports = new Atendimento()
