# My Bank API

Projeto em nodejs para gerenciar agências e contas de um banco

## Rodando o projeto

Baixe o repositório, acesse a pasta `modulo-4/pratico` e rode os comandos:

```bash
#para baixar as dependencias
yarn ou npm install
```

## Configurando

Renomeie o arquivo `.env.example` para `.env` e preencha com a URL de acesso do MongDB.

Crie uma database e, depois, uma collection com o nome `accounts` e importe o arquivo `accounts.json` nesta collection.

## Iniciando servidor

Execute o comando abaixo

```bash
#para iniciar o projeto
yarn start ou npm run start
```

## Testando

Utilize o Insomnia para testar os endpoints.

Para facilitar, exportei o arquivo `insomnia-endpoints.json` com todas as requisições criadas.

## Documentação

Com o servidor iniciado, acesse o endereço `http://localhost:3333/docs` para visualizar a documentação dos endpoints
