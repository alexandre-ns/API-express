# API express.js

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/alexandre-ns/API-express/blob/main/LICENSE)

## Status do Projeto

Em desenvolvimento [ATIVIDADES](https://github.com/users/alexandre-ns/projects/1/views/1)

## Sobre projeto API express.js

"API express.js" é uma API(Application Programming Interface) REST. O objetivo dessa aplicação é um simples projeto para portifólio, sendo um simples modelo de API rest de E-commerce usando tecnologias como Node.js, Express.js, além de um banco de dados MongoDB.

O projeto conta com uma estrutura de arquivos e diretórios([express-generator](https://expressjs.com/en/stargenerator.html)) construida para seguir arquitetura de camadas, justamente para oferecer uma maior modularidade e flexibilidade, conforme diferentes funcionalidades vão sendo implementadas.

A API conta com modelos de usuários contando com sistema simples de autenticação de login e restrição com token.
Sistema de validação de dados

## Resumo de informações

:white_check_mark: Implementado.
:chart_with_upwards_trend: Sendo implementada.
:hourglass_flowing_sand: Será implementado.

- :white_check_mark: API REST.
- :white_check_mark: Arquitetura de camadas.
- :white_check_mark: banco de dados não relacional mongoDB(ODM mongoose).
- :chart_with_upwards_trend: Middlewares de autenticação(JWT).
- :white_check_mark: Middlewares com validações robustas de dados(Schema validation - express-validator).
- :chart_with_upwards_trend: Erros personalizados.
- :white_check_mark: RabbitMQ para implementação de fila para processamento de dados (amqplib).
- :chart_with_upwards_trend: Testes com mocha - (should, supertest).
- :hourglass_flowing_sand: Arquivos shell script auxiliares com instruções para banco MongoDB e servidor RabbitMQ.
- :hourglass_flowing_sand: Collection Postman para interações simples com api.

## Tecnologias utilizadas

- desenvolvimento

  - Javascript
  - npm
  - Node.js
  - Express.js

- Banco de dados

  - MongoDB
  - \*ODM Mongoose

- testes

  - mocha
  - Postman

- auxiliares
  - \*Docker container
  - Jwt

\*Uso indireto ou tecnologia secundária.

# Implementação

O projeto segue modelo de arquitetura de camadas

```bash
Estrutura Principal de diretórios

project
├── bin   // EntryPoint da aplicação
└── src
    ├── config                // Camada de Infraestrutura e outras atividades.
    │   ├── collectionPostman
    │   ├── database          // Banco de Dados.
    │   └── rabbitmq          // Define classe base para conexão para criação de fila(RabbitMQ).
    ├── controllers           // Camada de Apresentação
    ├── errors                // Definição de Erros personalizados.
    ├── middlewares           // Define funções de middlewares.
    │   ├── auth
    │   └── validation
    ├── models                // Camada de Domínio
    ├── repositories          // Camada de Persistência
    ├── routes                // Define as rotas.
    ├── services              // Camada de Aplicação.
    │   └── queueConsumer     // consumidor de fila.
    ├── test                  // testes funcionais e testes de integração.
    └── validation            // validações de dados das requisições.
```

### User

### Product

### Order

### Cart

# Funcionamento

# Como executar o projeto

## Ambiente de produção.

### Ambiente de desenvolvimento.

### Ambiente de produção.

# Autor

Alexandre Nogueira.

https://www.linkedin.com/in/alexandre-ns/
