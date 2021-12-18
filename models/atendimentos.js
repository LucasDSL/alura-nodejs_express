const { send } = require("express/lib/response")
const moment = require("moment")
const conexao = require("../infraestrutura/conexao")

class Atendimento {
  adiciona(atendimento, res) {
    const data = moment(atendimento.data, "DD/MM/YYYY").format(
      "YYYY-MM-DD HH:MM:SS"
    )
    const data_criacao = moment().format("YYYY-MM-DD HH:mm:ss")
    const dataEhValida = moment(data).isSameOrAfter(data_criacao)

    const clienteEhValido = atendimento.Cliente.length >= 5

    const validacoes = [
      {
        nome: "Data",
        valido: dataEhValida,
        mensagem: "Data deve ser maior ou igual a data atual",
      },
      {
        nome: "Nome cliente",
        valido: clienteEhValido,
        mensagem: "O nome do cliente deve ter ao menos 5 caracteres.",
      },
    ]
    const erros = validacoes.filter(validacao => !validacao.valido)
    const existemErros = erros.length
    if (existemErros) {
      res.sendStatus(400).json(erros)
    } else {
      const query = "INSERT INTO Atendimentos SET ?"
      const atendimentoDatado = { ...atendimento, data_criacao, data }
      conexao.query(query, atendimentoDatado, (err, results) => {
        if (err) {
          res.sendStatus(400).json(err)
          console.log("houve erro na conn")
        } else {
          res.sendStatus(201).json(results)
          console.log("de boa")
        }
      })
    }
  }

  mostrar() {

  }
}

module.exports = new Atendimento()
