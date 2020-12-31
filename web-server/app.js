const express = require('express')
const cors = require('cors');
const app = express()
const redis = require("redis");

app.use(cors())
const port = 5000

const redisPort = 6379
const client = redis.createClient(redisPort);

client.on("error", (err) => {
  console.log(err);
})

app.get('/api/cpu', (req, res) => {
  try {
    client.get('cpu', async (err, data) => {
      if (err) throw err;

        res.status(200).send(data);

    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
})

app.get('/api/network', (req, res) => {
  try {
    client.get('network', async (err, data) => {
      if (err) throw err;
        res.status(200).send(JSON.stringify(data));

    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})