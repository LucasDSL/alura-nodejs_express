const conexao = require("../infraestrutura/database/conexao")
const uploadDeAquivos = require("../infraestrutura/arquivos/uploadDeArquivos")

class Pet {
  adicionar(pet, res) {
    const query = `INSERT INTO Pets SET ?`

    uploadDeAquivos(pet.imagem, pet.nome, (err, novoCaminho) => {
      if (err) {
        res.status(400).json(err)
      } else {
        const novoPet = { nome: pet.nome, imagem: novoCaminho }
        conexao.query(query, novoPet, (err, result, fields) => {
          if (err) {
            console.log(err)
            res.status(400).json({ err })
          } else {
            res.status(200).json(novoPet)
          }
        })
      }
    })
  }
}

module.exports = new Pet()
