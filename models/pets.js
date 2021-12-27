const conexao = require("../infraestrutura/conexao")
const uploadDeAquivos = require("../arquivos/uploadDeArquivos")

class Pet {
  adicionar(pet, res) {
    const query = `INSERT INTO Pets SET ?`

    uploadDeAquivos(pet.imagem, pet.nome, novoCaminho => {
      const novoPet = { nome: pet.nome, imagem: novoCaminho }
      conexao.query(query, novoPet, (err, result, fields) => {
        if (err) {
          console.log(err)
          res.status(400).json({ err })
        } else {
          res.status(200).json(novoPet)
        }
      })
    })
  }
}

module.exports = new Pet()
