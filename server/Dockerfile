FROM node
WORKDIR /app/server

COPY package.json ./
RUN npm install 
# RUN npm install react-scripts -g 
COPY . ./
EXPOSE 3000
