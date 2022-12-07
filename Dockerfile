FROM node
WORKDIR /api/v1/ingredients
COPY package*.json ./
RUN  npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]