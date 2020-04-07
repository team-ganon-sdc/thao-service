const faker = require('faker');
const fs = require('fs');

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
];

const writeData = fs.createWriteStream('./database/postgres/dataSQL.csv');
writeData.write('id,name,author,imageUrl,category,updatedAt,size,editorChoice,rating,ratings,currentVersion,install\n', 'utf8');

function generateData(writer, encoding, callback) {
  let i = 10000000;
  let idHolder = 0
  write();
  function write() {
    let ok = true;
    do {
      i--;
      idHolder++;
      let id = idHolder;
      let name = faker.commerce.product();
      let author = faker.name.firstName() + ' ' + faker.name.lastName();
      let imageUrl = faker.random.arrayElement(images);
      let category = faker.random.arrayElement(categories);
      let updatedAt = faker.date.past();
      let size = faker.random.number() + 'MB';
      let editorChoice = faker.random.boolean();
      let rating = (Math.floor((Math.random() * 10) + 1))/2;;
      let ratings = faker.random.number();
      let currentVersion = Math.floor(Math.random() * (1000 - 100) + 100) / 100;;
      let installs = faker.random.number();
      let data = `${id},${name},${author},${imageUrl},${category},${updatedAt},${size},${editorChoice},${rating},${ratings},${currentVersion},${installs}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
}

generateData(writeData, 'utf8', () => {
  writeData.end();
});