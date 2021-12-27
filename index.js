const customExpress = require("./config/customExpress")
const app = customExpress()
const conexao = require("./infraestrutura/database/conexao")
const Tabelas = require("./infraestrutura/database/tabelas")

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
