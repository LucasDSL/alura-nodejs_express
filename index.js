const customExpress = require("./config/customExpress")
const app = customExpress()
const conexao = require("./infraestrutura/conexao")
const Tabelas = require("./infraestrutura/tabelas")

conexao.connect(err => {
  if (err) {
    console.log(err)
  } else {
    Tabelas.init(conexao)
    app.listen(3000, () => {
      console.log("Listening port 3000")
    })
  }
})
