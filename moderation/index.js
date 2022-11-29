import express, { json } from 'express'
import axios from 'axios'

const app = express()

app.use(json())

app.post('/events', (req, res) => {

})

app.listen(4003, () => {
  console.log('Server is running on PORT: 4003')
})