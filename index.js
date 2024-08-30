const express = require('express')

const PORT = 5000

const server = express()

server.get('/', (request, response) => {
  // response.send('Olá, tudo bem?')
  response.send(`<h1>Olá</h1>`)
  // response.json({"message": "Oi, tudo bem?"})
})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


server.get('/:id', (request, response) => {
  const { id } = request.params
  const { nome } = request.query
  console.log(nome)
  // console.log(id)
 
  // response.json(`Valor do route params ${id}`)
  response.json(`Valor do query params ${nome}`)
})
