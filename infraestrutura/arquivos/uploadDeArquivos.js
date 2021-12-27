const fs = require("fs")
const path = require("path")

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {
  const tipo = path.extname(caminho)
  const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`
  const tiposValidos = ["jpg", "jpeg", "png"]
  const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1
  if (tipoEhValido) {
    fs.createReadStream(caminho)
      .pipe(fs.createWriteStream(novoCaminho))
      .on("finish", () => callbackImagemCriada(false, novoCaminho))
  } else {
    const error = "Tipo eh inválido!"
    callbackImagemCriada(error)
  }
}
