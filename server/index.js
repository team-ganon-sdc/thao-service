require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const pool = require('../database/postgres/index.js');
const { Pool, Client} = require('pg')
const table = 'app';

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
  pool.query(`SELECT * FROM ${table} WHERE id=${req.params.appid}`, (err, data) => {
    if (err) {
      console.error(err)
    }
    res.send(data.rows);
  })
})

app.post('/apps', (req, res) => {

  let text = `INSERT INTO ${table}(id, name, author, imageurl, category, updatedat, size, editorchoice, rating, ratings, currentversion, installs) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) ON CONFLICT (id) DO NOTHING`;

  let values = [req.body.id, req.body.name, req.body.author, req.body.imageurl, req.body.category, req.body.updatedat, req.body.size, req.body.editorchoice, req.body.rating, req.body.ratings, req.body.currentversion, req.body.installs];

  pool.query(text, values, (err, data) => {
    if (err) {
      console.error(err)
    }
    res.send(data.rows[0]);
  })
})

// app.put('/apps', (req, res) => {
//   App.findOneAndUpdate({id: req.body.id}, req.body)
//   .then( () => {
//     res.status(200).send(`Successfully updated id ${req.body.id}`)
//   })
//   .catch(err => {
//     if(err) {
//       console.log(err)
//     }
//   })
// })

app.delete('/apps/:appid', (req, res) => {
  pool.query(`DELETE FROM ${table} WHERE id=${req.params.appid} RETURNING *`, (err, data) => {
    if (err) {
      console.error(err)
    }
    res.send(data.rows[0]);
  })
})

app.get('/app.js', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/bundle.js'))
});

const server = app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = server;