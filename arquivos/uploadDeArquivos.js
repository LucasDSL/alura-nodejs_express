const fs = require("fs")

module.exports = (caminho) => {
  fs.createReadStream(caminho)
    .pipe(fs.createWriteStream(caminh))
    .on("finish", () => console.log("IMagem do salsicha escrita com sucesso"))
}
