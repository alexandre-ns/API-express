# API express.js
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/alexandre-ns/API-express/blob/main/LICENSE)

## Status do Projeto

Em desenvolvimento [ATIVIDADES](https://github.com/users/alexandre-ns/projects/1/views/1)

## Sobre projeto API express.js

"API express.js" é uma API(Application Programming Interface) REST. O objetivo dessa aplicação é um simples projeto para portifólio, sendo um simples modelo de API rest de E-commerce usando tecnologias como Node.js, Express.js, além de um banco de dados MongoDB.

 O projeto conta com uma estrutura de arquivos e diretórios([express-generator](https://expressjs.com/en/stargenerator.html)) construida para seguir arquitetura de camadas, justamente para oferecer uma maior modularidade e flexibilidade, conforme diferentes funcionalidades vão sendo implementadas.

A API conta com modelos de usuários contando com sistema simples de autenticação de login e restrição com token.

## Tecnologias usadas
- desenvolvimento
    - Javascript
    - npm
    - Node.js
    - Express.js

- Banco de dados
    - MongoDB
    - *ODM Mongoose
    - *Mongosh
    - *migrate-mongo

- testes
    - mocha
    - should 
    - supertest
    - Postman

- auxiliares
    - *Docker container
    - Jwt

*Uso indireto ou tecnologia secundária.

# Implementação

O projeto segue modelo de arquitetura de camadas

 ```bash
Estrutura Principal de diretórios

project
├── controllers
├── errors
├── middlewares
│   ├── auth
│   └── validator
├── models
├── repositories
├── routes
├── services
├── test
└── validation
```

Sistema implementado com base em arquitetura de camadas
1.  controllers/ camada de apresentação - interface com o usuário.
2.  services/ camada de aplicação - lógica da aplicação.
3.  models/ camada de domínio - modela os dados.
4.  repositories/  camada de repository - interage com o banco de dados
5.  inf/ camada de infraestrutura - serviços basicos para funcionamento.


### User
### Product
### Order
### Cart


# Funcionamento


# Como executar o projeto


## Ambiente de produção.


### Ambiente de desenvolvimento.

```bash
# clonar repositório
git clone https://github.com/alexandre-ns/Base-Web-Django.git

# entrar na pasta do projeto back end
cd Base-Web-Django

# Instalação de dependências
pip install -r requirements.txt

# criação dos arquivos de migração
python manage.py makemigrations

# Aplicação de migrações
python manage.py migrate

# Inicia servidor Django
python manage.py runserver
```

# Autor

Alexandre Nogueira.

https://www.linkedin.com/in/alexandre-ns/