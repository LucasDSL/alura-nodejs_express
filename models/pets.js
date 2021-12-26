const conexao = require("../infraestrutura/conexao")

class Pet {
  adicionar(pet, res) {
    const query = `INSERT INTO Pets SET ?`
    conexao.query(query, pet, (err, result, fields) => {
        if(err) {
            console.log(err)
            res.status(400).json({err})
        }
        else {
            res.status(200).json(pet)
        }
    })
  }
}

module.exports = new Pet()