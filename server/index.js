const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const App = require('../database/App.js');

const app = express();
const PORT = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/apps/:appid', (req, res) => {
  App.find(
    {id: req.params.appid})
  .then(
    data => {
      res.send(data);
    })
  .catch(
    err => {
      if(err) {
        console.log(err);
      }
    })
})

app.post('/apps', (req, res) => {
  App.create([req.body])
  .then( () => {
    res.status(200).send(`Successfully added id ${req.body.id}`)
  })
  .catch(err => {
    if(err) {
      console.log(err)
    }
  })
})

app.put('/apps', (req, res) => {
  App.findOneAndUpdate({id: req.body.id}, req.body)
  .then( () => {
    res.status(200).send(`Successfully updated id ${req.body.id}`)
  })
  .catch(err => {
    if(err) {
      console.log(err)
    }
  })
})

app.delete('/apps/:appid', (req, res) => {
  App.deleteOne(
    {id: req.params.appid})
  .then(
    data => {
      res.send(data);
    })
  .catch(
    err => {
      if(err) {
        console.log(err);
      }
    })
})


const server = app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = server;