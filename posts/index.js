const express = require('express')
const { randomBytes } = require('crypto')

const app = express()

const posts = {}

app.get('/posts', (req, res) => {
  res.send({ posts })
})

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex')
  const { title } = req.body
  posts[id] = { id, title }
})

app.listen(4000, () => {
  console.log('Server listening on PORT: 4000')
})