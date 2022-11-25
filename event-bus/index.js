import express, { json } from 'express';
import axios from 'axios';
import cors from 'cors'

const app = express()

app.use(json())
app.use(cors())

app.post('/event', (req, res) => {
  const event = req.body

  axios.post('http://localhost:4000/events', event)
  axios.post('http://localhost:4001/events', event)
  axios.post('http://localhost:4002/events', event)
  res.send({ status: 'OK' })
})

app.listen(4005, () => {
  console.log('Event-bus is running on port: 4005')
})