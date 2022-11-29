import express, { json } from 'express';
import axios from 'axios';
import cors from 'cors'

const app = express()

app.use(json())
app.use(cors())

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4003/events", event).catch((err) => {
    console.log(err.message);
  });
  res.send({ status: "OK" });
})

app.listen(4005, () => {
  console.log('Event-bus is running on port: 4005')
})