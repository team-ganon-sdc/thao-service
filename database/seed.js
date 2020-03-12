const db = require('./index.js');
const App = require('./App.js');
const faker = require('faker');

const sampleApps = [];

var addFakerData = function() {
  for(var i = 1; i <= 100 ; i++) {
    var fullName = faker.name.firstName() + ' ' + faker.name.lastName();
    var categories = ['Social', 'Games', 'Finance', 'Lifestyle', 'Productivity'];
    var randomIndex = Math.floor((Math.random() * 5));
    var obj = {
      id : i,
      name : faker.commerce.product(),
      author : fullName,
      imageUrl : faker.image.image(),
      category : categories[randomIndex],
      updatedAt : faker.date.past(),
      size : faker.random.number() + 'MB',
      editorChoice : faker.random.boolean(),
      installs : faker.random.number()
    }
    sampleApps.push(obj);
  }
}();

const insertSampleApps = function() {
  App.create(sampleApps)
    .then(() => db.disconnect());
};

insertSampleApps();