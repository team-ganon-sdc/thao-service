const fs = require('fs')
const path = require('path')
const { Pool, Client} = require('pg')
const copyFrom = require('pg-copy-streams').from
const config = require('./config.json')

var inputFile = path.join(__dirname, '/dataSQL.csv');
var table = 'app';

const host = config.host;
const user = config.user;
const pw = config.pw;
const db = config.db;
const port = config.port;
const schema = '(id integer UNIQUE PRIMARY KEY, name varchar(200), author varchar(200), imageUrl varchar(200), category varchar(200), updatedAt varchar(200), size varchar(200), editorChoice Boolean, rating Numeric, ratings Numeric, currentVersion Numeric, installs Numeric )';

const pool = new Pool({
  user: user,
  host: host,
  database: db,
  password: pw,
  port: port
});

(async function() {
  const client = await pool.connect();
  var createTable = client.query(`CREATE TABLE ${table}${schema}`)
  var stream = client.query(copyFrom(`COPY ${table} FROM STDIN WITH DELIMITER ',' CSV HEADER`))
  var fileStream = fs.createReadStream(inputFile)

  fileStream.on('error', (error) =>{
    console.log(`Error in reading file: ${error}`)
  })
  stream.on('error', (error) => {
    console.log(`Error in copy command: ${error}`)
  })
  stream.on('end', () => {
    console.log(`Completed loading data into ${table}`)
    client.end()
  })
  await createTable;
  fileStream.pipe(stream);
})()
