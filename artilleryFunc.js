'use strict';

module.exports = {
  generateRandomData
};
const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const id = Math.floor(Math.random() * 10000001);
  // add variables to virtual user's context:
  userContext.vars.id = id;
  // continue with executing the scenario:
  return done();
}