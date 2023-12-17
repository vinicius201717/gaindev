# Use uma imagem base com uma versão do sistema operacional que suporte as dependências
FROM node:14

# Resto do seu Dockerfile
# ...

# Execute o comando npm install dentro do contêiner Docker
RUN npm install