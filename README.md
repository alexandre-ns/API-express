# API express.js
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/alexandre-ns/API-express/blob/main/LICENSE) 

# Sobre projeto API express.js

"API express.js" é uma API(Application Programming Interface) REST. O objetivo dessa aplicação é um simples projeto para portifólio, sendo um simples modelo de API restful de E-commerce usando tecnologias como Node.js, Express.js usando um banco de dados MongoDB.

 O projeto conta com uma estrutura de arquivos e diretórios(usando [express-generator](https://expressjs.com/en/starter/generator.html)) pensada justamente para oferecer uma maior modularidade e flexibilidade conforme diferentes funcionalidades vão sendo implementadas.

A API conta com modelos de usuários contando com sistema simples de autenticação de login e restrição com token para registro de usuários.



 - ### User
    - registro de novos usuários.
    - login de usuários.
    - exclusão de usuários.
    - consulta de usuários.

 - ### Products
    - criação de novos produtos.
    - consulta de produtos.
    - atualização de produtos.
    - exclusão de produtos.


# Funcionamento

Após iniciar a aplicação temos o ambiente de adminstração django, que é onde podemos iniciar a montagem do website.



##### Para o Correto funcionamento cada modelo de página deve possuir um e somente um elemento com campo 'Página ativa' ativado.
- Página Contatos - Construção de tela da página CONTATO 
- Página Sobre - Construção de tela da página SOBRE.
- Página Inicial - Construção de tela da página INICIAL.

### Exemplo simples de resultado de Layout web
![site 5](https://github.com/alexandre-ns/Assets/blob/main/basic_web_blog/site07.png)

Página Inicial.

![site 6](https://github.com/alexandre-ns/Assets/blob/main/basic_web_blog/site06.png)

Página Contato.

![site 6](https://github.com/alexandre-ns/Assets/blob/main/basic_web_blog/site03.png)
![site 6](https://github.com/alexandre-ns/Assets/blob/main/basic_web_blog/site04.png)

Redes sociais


## Tecnologias utilizadas
- JavaScript
- Node.js
- Express.js

# Como executar o projeto

Pré-requisitos: 
    - jav
    - Django
    - pip
    - Ambiente virtual python(opcional, mas recomendado)

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