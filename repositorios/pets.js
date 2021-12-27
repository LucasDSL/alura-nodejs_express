const query = require("../infraestrutura/database/queries")

class Pets {
  adicionar(novoPet) {
    const sql = `INSERT INTO Pets SET ?`
    return query(sql, novoPet)
  }
}
