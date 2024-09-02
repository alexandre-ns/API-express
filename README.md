# Boilerplate - API REST E-Commerce express.js

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/alexandre-ns/API-express/blob/main/LICENSE)

## Status do Projeto

Em desenvolvimento [ATIVIDADES](https://github.com/users/alexandre-ns/projects/1/views/1)

## Sobre projeto API express.js

O projeto "API express.js" é um boilerplate que consiste em uma API(Application Programming Interface) REST de e-commerce. O objetivo dessa aplicação é um simples projeto boilerplate para portifólio que pode ser usado como base para o desenvolvimento de APIs de e-commerce mais roboustas, sendo um simples modelo de API rest de E-commerce usando tecnologias como Node.js, Express.js, além de um banco de dados MongoDB.

O projeto conta com uma estrutura de arquivos e diretórios construida para seguir arquitetura de camadas, justamente para oferecer uma maior modularidade e flexibilidade, conforme diferentes funcionalidades vão sendo implementadas.

## Resumo de informações, funcionalidades e desenvolvimento.

:white_check_mark: Implementado.
:chart_with_upwards_trend: Sendo implementada.
:hourglass_flowing_sand: Será implementado.

- :white_check_mark: API REST.
- :white_check_mark: API baseada em arquitetura de camadas.
- :white_check_mark: Banco de dados não relacional mongoDB(ODM mongoose).
- :chart_with_upwards_trend: Middlewares de autenticação(JWT).
- :white_check_mark: Middlewares com validações robustas de dados(Schema validation - express-validator).
- :chart_with_upwards_trend: Erros personalizados.
- :white_check_mark: Sistema de mensageria RabbitMQ para implementação de fila para processamento de pedidos (amqplib).
- :chart_with_upwards_trend: Testes de integração com mocha - (should, supertest).
- :hourglass_flowing_sand: Arquivos shell script auxiliares com instruções para banco MongoDB e servidor RabbitMQ.
- :hourglass_flowing_sand: Collection Postman para interações simples com api.
- :white_check_mark: GIT - Padrões de commit(commitlint), Husk para hooks pré commit(Neste projeto não foi implementado sistema de branches gitflow por motivos específicos. ).
- :chart_with_upwards_trend: Alguns design patterns, como singleton, etc.

## Tecnologias utilizadas

- desenvolvimento

  - Javascript
  - npm
  - Node.js
  - Express.js

- Banco de dados

  - MongoDB
  - ODM Mongoose

- testes

  - Mocha
  - Postman

- Validações

  - checkSchema(express-validator)

- Fila

  - RabbitMQ(amqplib)

- Autenticação

  - JWT(talvez futuramente troque por Outh2)

- auxiliares
  - Docker container
  - shell scripts para banco de dados e fila rabbitMQ.
  - commitlint
  - Eslint
  - Husk
  - express-generator

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
