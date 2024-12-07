/*
// server.js
import { createServer } from 'node:http';
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});
// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
*/

// run with `node server.js`
/*
FrameWork
POST localhost:3000/videos
DELETE localhost:3000/videos/1
Instalar o microframework fastify no terminal através do comando npm install fastify
*/

//Com o fastify

import { fastify } from 'fastify'
const server = fastify()

server.get('/' , () => {
  return 'Hi People!'
})

/*
server.get('/hi' , () => {
  return 'Hi Brasil!'
})

server.get('/node' , () => {
  return 'Hi Node.js'
})
*/

// Criar uma rota para postar videos com o POST http://localhost:3000/videos

server.post('/videos' , () => {
  return 'Hi Brasil!'
})

server.get('/videos' , () => {
  return 'Hi Brasil, Sao Paulo!'
})

server.put('/videos/:id' , () => {
  return 'Hi Brasil, Sao Paulo, SP!'
})

server.delete('/videos/:id' , () => {
  return 'Hi Brasil, Sao Paulo, SP, SBC!'
})

server.listen({
  port: 3000,
})