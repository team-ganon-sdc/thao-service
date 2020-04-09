const ExpressCassandra = require('express-cassandra');
const cassandra = require('cassandra-driver');
const fs = require('fs');
const path = require('path');
const inputFile = path.join(__dirname, '/dataSQL.csv');

const models = ExpressCassandra.createClient({
    clientOptions: {
        contactPoints: ['127.0.0.1'],
        protocolOptions: { port: 9042 },
        keyspace: 'sdckeyspace',
        queryOptions: {consistency: ExpressCassandra.consistencies.one}
    },
    ormOptions: {
        defaultReplicationStrategy : {
            class: 'SimpleStrategy',
            replication_factor: 1
        },
        migration: 'safe',
    }
});

const MyModel = models.loadSchema('sdcmodel', {
  fields:{
    id: "int",
    name: "text",
    author: "text",
    imageurl: "text",
    category: "text",
    updatedat: "text",
    size: "text",
    editorchoice: "boolean",
    rating: "text",
    ratings: "int",
    currentversion: "text",
    installs : "int"
},
key:["id"]
});

// sync the schema definition with the cassandra database table
// if the schema has not changed, the callback will fire immediately
// otherwise express-cassandra will try to migrate the schema and fire the callback afterwards
MyModel.syncDB(function(err, result) {
    if (err) {
      console.error(err);
    }
    console.log(result);
});

// COPY sdcmodel (id, name, author, imageurl, category, updatedat, size, editorchoice, rating, ratings, currentversion, installs) FROM '/Users/thaole/Desktop/Developer/Hack Reactor/SDC/app-info-logistics-component/database/cassandra/dataSQL.csv' WITH DELIMITER=',' AND HEADER=TRUE;
