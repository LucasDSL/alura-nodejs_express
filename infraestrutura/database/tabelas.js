class Tabelas {
  init(conexao) {
    this.conexao = conexao
    
    this.criarAtendimento()
    this.criarPets()
  }

  criarAtendimento() {
    const sql = `CREATE TABLE IF NOT EXISTS Atendimentos 
        (
        id int NOT NULL AUTO_INCREMENT, 
        Cliente varchar(50) NOT NULL, 
        pet varchar(20), 
        servico varchar(20) NOT NULL, 
        data datetime NOT NULL, 
        data_criacao datetime NOT NULL, 
        status varchar(20) NOT NULL,
        observacoes text, 
        PRIMARY KEY(id)
        )`
    this.conexao.query(sql, err => {
      if (err) {
        console.log(err)
      } else {
        console.log("Tabela atendimentos criada com sucesso!")
      }
    })
  }

  criarPets() {
    const query = `CREATE TABLE IF NOT EXISTS Pets (
      id INT NOT NULL AUTO_INCREMENT, 
      nome varchar(50),
      imagem varchar(200),
      Primary Key(id)
      )`
    this.conexao.query(query, erro => {
      if (erro) {
        console.log(erro)
      } else {
        console.log("Tabela Pets criada com sucesso!")
      }
    })
  }
}

module.exports = new Tabelas()
