import express, { json } from 'express'
import { randomBytes } from 'crypto'
import cors from 'cors'
import axios from 'axios'


const app = express()

app.use(json())
app.use(cors())

const posts = {}

app.get('/posts', (req, res) => {
  res.send(posts)
})

app.post('/posts', async(req, res) => {
  const id = randomBytes(4).toString('hex')
  const { title } = req.body
  posts[id] = { id, title }

  await axios.post('http://localhost:4005/events', {
    type: 'PostCreated',
    data: {
      id, title
    }
  })
  res.status(201).send(posts[id])
})

app.listen(4000, () => {
  console.log('Server listening on PORT: 4000')
})