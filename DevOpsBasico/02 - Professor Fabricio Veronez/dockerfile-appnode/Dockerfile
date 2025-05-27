FROM node:16.13.2
WORKDIR /app
# faz o copy separado para evitar atualizar toda aplicação
# quando não houver mudanças no package.json
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]
