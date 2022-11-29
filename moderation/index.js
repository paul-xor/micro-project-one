import express, { json } from 'express'
import axios from 'axios'

const app = express()

app.use(json())

app.post('/events', async(req, res) => {
  const { type, data } = req.body

  if( type === 'CommentCreated') {
    const status = data.content.includes('orange') ? 'rejected' : 'approved'
    await axios.post('http://localhost:4005/events', {
      type: 'CommentModerated',
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content,
      }
    })
  }
  res.send({})
})

app.listen(4003, () => {
  console.log('Server is running on PORT: 4003')
})