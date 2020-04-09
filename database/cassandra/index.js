const cassandra = require('cassandra-driver');

const casClient = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'sdckeyspace'
});

module.exports = casClient