const { Pool, Client} = require('pg')
const config = require('./config.json')

const host = config.host;
const user = config.user;
const pw = config.pw;
const db = config.db;
const port = config.port;

const pool = new Pool({
  user: user,
  host: host,
  database: db,
  password: pw,
  port: port
});


module.exports = pool;