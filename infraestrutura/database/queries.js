const conexao = require("./conexao")

const executaQuery = (query, parametros = "") => {
  return new Promise((resolve, reject) => {
    conexao.query(query, parametros, (err, results) => {
      if (err) {
        reject(err)
      } else {
        resolve(results)
      }
    })
  })
}
