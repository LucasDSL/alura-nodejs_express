const fs = require("fs")
fs.readFile("./assets/salsicha.jpg", (err, buffer) => {
  console.log("Imagem bufferizada")
  console.log(buffer)

  fs.writeFile("./assets/salsicha2.jpg", buffer, (err) => {
    console.log("Imagem escrita")
  })
})
