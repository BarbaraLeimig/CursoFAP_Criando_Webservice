# CursoFAP_Criando_Webservice

## Configurar o Ambiente
Instalar o Node.js

## Inicializando o Projeto
### Abra o terminal e crie um novo diretório para o seu projeto
mkdir meu-servidor
cd meu-servidor

### Inicie um novo projeto Node.js:
npm init -y

### Instale o TypeScript e o ts-node como uma dependências de desenvolvimento
npm install -D typescript ts-node
npm install -g ts-node

### Instale também a dependência @types/node
npm install @types/node

## Instalando o Express
###Instale o Express como dependências de desenvolvimento do seu projeto
npm install -D express

### instalar a dependência @types/express para que possamos
trabalhar com requisições e respostas
npm install @types/express

###Instale o Nodemon
npm install nodemon

## Executando o Servidor
ts-node app.ts
