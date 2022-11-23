import express, { json } from 'express'
import { randomBytes } from 'crypto'


const app = express()
app.use(json())

const commentsByPostId = {}

app.get('post/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || [])
})

app.post('post/:id/comments', (req, res) => {
  const commentsByPostId = randomBytes(4).toString('hex')
  const { content } = req.body

  const comments = commentsByPostId[req.params.id] || []

  comments.push({ id: commentsByPostId, content })
  commentsByPostId[req.params.id] = comments

  res.status(201).send(comments)
})

app.listen(4001, () => {
  console.log('🚀 Server running on PORT: 4001')
})