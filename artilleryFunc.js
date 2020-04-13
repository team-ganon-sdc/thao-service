'use strict';

module.exports = {
  generateRandomID,
  generateRandomData
};
const faker = require('faker');

const categories = ['Social', 'Games', 'Finance', 'Lifestyle', 'Productivity'];
const images = [
      'https://i.picsum.photos/id/538/640/640.jpg',
      'https://i.picsum.photos/id/58/600/600.jpg',
      'https://i.picsum.photos/id/873/600/600.jpg',
      'https://i.picsum.photos/id/547/600/600.jpg',
      'https://i.picsum.photos/id/691/600/600.jpg',
      'https://i.picsum.photos/id/680/600/600.jpg',
      'https://i.picsum.photos/id/703/600/600.jpg',
      'https://i.picsum.photos/id/937/600/600.jpg',
      'https://i.picsum.photos/id/650/600/600.jpg',
      'https://i.picsum.photos/id/668/600/600.jpg',
      'https://i.picsum.photos/id/619/600/600.jpg',
      'https://i.picsum.photos/id/548/600/600.jpg',
      'https://i.picsum.photos/id/401/600/600.jpg',
      'https://i.picsum.photos/id/338/600/600.jpg',
      'https://i.picsum.photos/id/558/600/600.jpg',
      'https://i.picsum.photos/id/2/600/600.jpg',
      'https://i.picsum.photos/id/310/600/600.jpg',
      'https://i.picsum.photos/id/152/600/600.jpg',
      'https://i.picsum.photos/id/386/600/600.jpg',
      'https://i.picsum.photos/id/835/600/600.jpg',
      'https://i.picsum.photos/id/521/600/600.jpg',
      'https://i.picsum.photos/id/586/600/600.jpg',
      'https://i.picsum.photos/id/239/600/600.jpg',
      'https://i.picsum.photos/id/617/600/600.jpg',
      'https://i.picsum.photos/id/1019/600/600.jpg',
      'https://i.picsum.photos/id/435/600/600.jpg',
      'https://i.picsum.photos/id/239/600/600.jpg',
      'https://i.picsum.photos/id/993/600/600.jpg',
      'https://i.picsum.photos/id/985/600/600.jpg',
      'https://i.picsum.photos/id/1018/600/600.jpg',
      'https://i.picsum.photos/id/805/600/600.jpg',
      'https://i.picsum.photos/id/1008/600/600.jpg',
      'https://i.picsum.photos/id/628/600/600.jpg',
      'https://i.picsum.photos/id/141/600/600.jpg',
      'https://i.picsum.photos/id/1040/600/600.jpg',
      'https://i.picsum.photos/id/294/600/600.jpg',
      'https://i.picsum.photos/id/504/600/600.jpg',
      'https://i.picsum.photos/id/389/600/600.jpg',
      'https://i.picsum.photos/id/616/600/600.jpg',
      'https://i.picsum.photos/id/1053/600/600.jpg',
      'https://i.picsum.photos/id/545/600/600.jpg',
      'https://i.picsum.photos/id/622/600/600.jpg',
      'https://i.picsum.photos/id/572/600/600.jpg',
      'https://i.picsum.photos/id/794/600/600.jpg',
      'https://i.picsum.photos/id/145/600/600.jpg',
  ]

function generateRandomID(userContext, events, done) {
  // generate data with Faker:
  const id = Math.floor(Math.random() * 10000001);
  // add variables to virtual user's context:
  userContext.vars.id = id;
  // continue with executing the scenario:
  return done();
}

function generateRandomData(userContext, events, done) {
  let fullName = faker.name.firstName() + ' ' + faker.name.lastName();
  let randomIndex = Math.floor((Math.random() * 5));
  let randomVersion = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
  let randomRating = (Math.floor((Math.random() * 10) + 1))/2;
  const randomID = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let id = randomID(10000001, 99999999);
  let name = faker.commerce.product();
  let author = fullName;
  let imageurl = faker.random.arrayElement(images);
  let category = categories[randomIndex];
  let updatedat = faker.date.past();
  let size = faker.random.number() + 'MB';
  let editorchoice = faker.random.boolean();
  let rating = randomRating;
  let ratings = faker.random.number();
  let currentversion = randomVersion;
  let installs = faker.random.number();

  userContext.vars.id = id;
  userContext.vars.name = name;
  userContext.vars.author = author;
  userContext.vars.imageurl = imageurl;
  userContext.vars.category = category;
  userContext.vars.updatedat = updatedat;
  userContext.vars.size = size;
  userContext.vars.editorchoice = editorchoice;
  userContext.vars.rating = rating;
  userContext.vars.ratings = ratings;
  userContext.vars.currentversion = currentversion;
  userContext.vars.installs = installs;

  return done();
}