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
      res.status(400).json(erros)
    } else {
      const query = "INSERT INTO Atendimentos SET ?"
      const atendimentoDatado = { ...atendimento, data_criacao, data }
      conexao.query(query, atendimentoDatado, (err, results) => {
        if (err) {
          res.status(400).json(err)
        } else {
          res.status(201).json(results)
        }
      })
    }
  }

  listar(res) {
    const query = `SELECT * FROM atendimentos`
    conexao.query(query, (err, results) => {
      if (err) {
        res.status(400).json(err)
      } else {
        res.status(200).json(results)
      }
    })
  }

  buscaPorId(id, res) {
    const query = `SELECT * FROM atendimentos WHERE id=${id}`

    conexao.query(query, (err, results) => {
      if (err) {
        res.status(400).json(err)
      } else {
        res.status(200).json(results)
      }
    })
  }

  alterar(id, valores, res) {
    const query = `UPDATE atendimentos SET ? WHERE id=${id}`
    if (valores.data) {
      valores.data = moment(valores.data, "DD/MM/YYYY").format(
        "YYYY-MM-DD HH:MM:SS"
      )
    }
    conexao.query(query, [valores], (err, results) => {
      if (err) {
        res.status(400).json(err)
      } else {
        res.status(200).json({ ...valores, id })
      }
    })
  }

  deleta(id, res) {
    const query = `DELETE FROM atendimentos WHERE id=${id}`

    conexao.query(query, (err, results) => {
      if (err) {
        res.status(400).json(err)
      } else {
        res.status(200).json({ id: id })
      }
    })
  }
}

module.exports = new Atendimento()
