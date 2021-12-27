const uploadDeAquivos = require("../infraestrutura/arquivos/uploadDeArquivos")
const repositorios = require("../repositorios/pets")

class Pet {
  adicionar(pet) {
    uploadDeAquivos(pet.imagem, pet.nome, (err, novoCaminho) => {
      if (err) {
        return new Promise((resolve, reject) => reject(err))
      } else {
        const novoPet = { nome: pet.nome, imagem: novoCaminho }
        return repositorios.adicionar(novoPet)
      }
    })
  }
}

module.exports = new Pet()
