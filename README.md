# Todo App Gift Card

O Todo App Gift Card é uma aplicação Web para os clientes que ganharam um Gift Card terem acesso às informações do cartão e das transações realizadas.

![Screenshot from 2021-09-05 15-01-53](https://user-images.githubusercontent.com/80683232/132136887-42494c36-c9f6-4bab-923e-47128d3e2a91.png)


## Stack Utiliza e porque:
- **React:**
  - Components Driven Development 
  - Manipulação do DOM 
  - Views declarativas  
 
- **Django:**
  - Rapidez para criar a arquitetura
  - Segurança da aplicação
  - Fácil escalabilidade

- **Rest Framework API:**
  - Rapidez para criar APIs
  - Fácil integração com o Django
 
- **JSON Web Token (JWT):**
  - Segurança na transmissão de informações entre client e server
  - Segurança para autenticar usuários


## Instalação
1. Abrir o terminal
2. Clonar o repositótio
3. Mudar para o diretório 'back_end'
4. Instalar dependências no back-end
```
pip install -r requirements.txt
```
5. Mudar para o diretório 'front_end'
6. Instalar dependência no front-end
```
npm install
```


## Rodar o ambiente de desenvolvimento
**Em um terminal:**
1. Mudar para o diretório back_end
2. Rodar o server
```
python3 manage.py runserver
```

**Em ou outro terminal:**
1. Mudar para o diretório front_end
2. Rodar o client
```
npm start
```


## Teste da aplicação
![Screenshot from 2021-09-05 16-46-05](https://user-images.githubusercontent.com/80683232/132139607-6d980cae-bdac-48da-bacd-8637770ab0a8.png)
1. No 'Card Number', digite o valor '1111 2222 3333 4444' para simular um gift card que já está registrado no banco de dados
2. No 'Password', digite '123456'
3. Clique no botão 'Access Card'

Voilà! Agora você terá acesso as informações do cartão e das transações realizadas!

 
 ## Como registrar novos cartões ou alterar informações
 ![Screenshot from 2021-09-05 16-46-52](https://user-images.githubusercontent.com/80683232/132139629-cb3b16ad-dc45-480d-a248-12b339dd37a7.png)
 **Com o server rodando:**
 1. Acesse http://127.0.0.1:8000/admin/
 2. No 'Username', digite 'teste'
 3. No 'Password', digite 'teste123'
 4. Clique em 'Login'
 5. No painel do administrador, você pode adicionar e remover cartões no 'Users'
 6. Você pode adicionar ou mudar as informações dos cartões no 'Card informations'
 7. Você pode adicionar ou mudar as transações no 'Extract'


## Arquitetura do projeto
### back_end:
O projeto segue uma arquitetura MTV (Model, Templates, Views).
* **Models** são responsáveis por definir quais serão as tabelas, variáveis e tipos das variáveis que serão armazenadas no banco de dados.
* **Templates** são as interfaces que serão mostradas para o usuário para ele interagir com a aplicação.
* **Views** são funções que recebem um request do client e retoram um response. Geralmente, o response pode tomar forma de um templates renderizados, arquivos JSON, no caso de APIs e status do request.
* ***Serializers** são responsáveis por transformar uma querie do banco de dados em um arquivo JSON que pode ser interpretado pelo front_end.
* ***Urls** são as rotas que indicam qual view deve ser ativada de acordo com a url que fez a requisição.
* ***Settings** realizam as configurações do projeto.

![Screenshot from 2021-09-05 16-52-42](https://user-images.githubusercontent.com/80683232/132139756-94d5822c-ca15-4669-a15e-4ba8d5badf42.png)


### front_end:
* **Actions** guardam funções de componentes para deixar o código compartimentalizado.
* **Assets** contêm as imagens e outros recursos usados na aplicação.
* **AxiosRequest** realizam os requests para a API do back-end.
* **Components** são os componentes que formam a interface do usuário.
* **Constants** guardam constantes que são importantes para a aplicação. 

![Screenshot from 2021-09-05 17-21-44](https://user-images.githubusercontent.com/80683232/132140410-1c9da617-a91d-4d49-bf2e-6c5a35bd0bc6.png)
