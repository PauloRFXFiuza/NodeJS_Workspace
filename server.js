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
import { databaseMemory } from './database-memory.js'

const server = fastify()
const database = new databaseMemory()

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

/* 
Criar uma rota para postar videos com o POST http://localhost:3000/videos
Criar um Request Body
*/

server.post('/videos' , (request, reply) => {
  const {title, description, duration} = request.body

  console.log(body)

  database.create({
    title: title,
    description: description,
    duration: duration,
  })

  console.log(database.list())

  return reply.status(201).send()
  //status(201) significa que algo foi criado
})

server.get('/videos' , () => {
  const videos = database.list()
  console.log(videos)
  return videos
})

server.put('/videos/:id' , (request, reply) => {
  const videoId = request.params.id
  const {title, description, duration} = request.body

  database.update(videoId, {
    title: title,
    description: description,
    duration: duration,
  })
    // status(204) significa que o procedimento foi bem sucedido, porem com resposta vazia
  return reply.status(204).send()
})

server.delete('/videos/:id' , () => {
  return 'Hi Brasil, Sao Paulo, SP, SBC!'
})

server.listen({
  port: 3000,
})

/* 
Criar uma base de dados em memória com o database-memory.js
Criar um arquivo routes.html para que o servidor possa rodar .put , .delete ,...etc.
*/ 