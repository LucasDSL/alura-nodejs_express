### Como rodar o projeto localmente

0. É necessário possuir npm, nodejs e mysql para funcionamento adequado do projeto.
1. Copie o projeto localmente usando git

```git
git clone https://github.com/LucasDSL/alura-rest_nodejs_express.git alura_petshop_nodejs
```

2. Vá até a pasta do projeto

```txt
cd alura_petshop_nodejs
```

3. Instale as dependencias com npm

```txt
npm install
```

4. Também instale as dependências na pasta de serviços e rode o arquivo clientes.js

```txt
cd servicos
npm install
node clientes.js
```

5. Agora de volta a pasta raíz, crie um arquivo chamado ".env" e coloque suas credencias de acesso ao banco de dados para poder persistir as informações fornecidas em requisições, no seguinte formato:

```txt
HOST=<nome_do_host>
PORT=<numero_da_porta>
USER=<nome_do_user>
PASSWORD=<senha>
DATABASE=<nome_do_banco_de_dados>
```

obs: substituir pelos respectivos nomes sem "<>"

6. Agora de volta a pasta raíz, em outro terminal, rode o projeto

```txt
npm start
```
Tudo pronto! Já é possível através de programas como Postman ou Insomnia fazer diferentes requisições para o servidor. \
Para melhor referência ver aquivos na pasta "models".
