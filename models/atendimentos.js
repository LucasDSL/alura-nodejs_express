const moment = require("moment")
const conexao = require("../infraestrutura/database/conexao")
const axios = require("axios")
const repositorios = require("../repositorios/atendimentos")

class Atendimento {
  constructor() {
    this.dataEhValida = objetoDatas =>
      moment(objetoDatas.data).isSameOrAfter(objetoDatas.data_criacao)

    this.clienteEhValido = nomeCliente => nomeCliente.tamanho >= 5

    this.validacoes = [
      {
        nome: "data",
        valido: this.dataEhValida,
        mensagem: "Data deve ser maior ou igual a data atual",
      },
      {
        nome: "cliente",
        valido: this.clienteEhValido,
        mensagem: "O nome do cliente deve ter ao menos 5 caracteres.",
      },
    ]

    this.valida = parametros => {
      return this.validacoes.filter(campo => {
        const { nome } = campo
        const parametro = parametros[nome]
        return !campo.valido(parametro)
      })
    }
  }

  adiciona(atendimento) {
    const data = moment(atendimento.data, "DD/MM/YYYY").format(
      "YYYY-MM-DD HH:mm:ss"
    )
    const data_criacao = moment().format("YYYY-MM-DD HH:MM:SS")

    const parametros = {
      data: { data, data_criacao },
      cliente: { tamanho: atendimento.Cliente.length },
    }
    const erros = this.valida(parametros)
    const existemErros = erros.length
    if (existemErros) {
      return new Promise((resolve, reject) => {
        reject(erros)
      })
    } else {
      const atendimentoDatado = { ...atendimento, data_criacao, data }
      return repositorios.adiciona(atendimentoDatado).then(results => {
        const id = results.insertId
        return { ...atendimentoDatado, id }
      })
    }
  }

  listar() {
    return repositorios.listar().then(results => {
      return results
    })
  }

  buscaPorId(id) {
    return repositorios.buscarPorId(id).then(results => {
      return results
    })
  }

  alterar(id, valores) {
    if (valores.data) {
      valores.data = moment(valores.data, "DD/MM/YYYY").format(
        "YYYY-MM-DD HH:MM:SS"
      )
    }
    return repositorios.alterar(id, valores).then(results => {
      return results
    })
  }

  deleta(id) {
    return repositorios.deleta(id)
  }
}

module.exports = new Atendimento()
