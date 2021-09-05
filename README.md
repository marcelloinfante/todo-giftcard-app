# Todo App Gift Card

O Todo App Gift Card é uma aplicação web para os clientes que ganharam um Gift Card terem acesso as informações do cartão e das transações realizadas.

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
1. No 'Card Number', digite o valor '1111 2222 3333 4444' para simular um gift card que já está registrado no banco de dados
2. No 'Password', digite '123456'
3. Clique no botão 'Access Card'

Voilà! Agora você terá acesso as informações do cartão e das transações realizadas!

 
 ## Como registrar novos cartões ou alterar informações
 **Com o server rodando:**
 1. Acesse http://127.0.0.1:8000/admin/
 2. No 'user', digite 'teste'
 3. No 'password', digite 'teste123'
 4. No painel do administrador, você pode adicionar e remover cartões no 'Users'
 5. Você pode adicionar ou mudar as informações dos cartões no 'Card informations'
 6. Você pode adicionar ou mudar as transações no 'Extract'
