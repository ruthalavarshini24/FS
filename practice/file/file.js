const fs = require('fs');
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
const content = 'This is new content for the file.';
fs.writeFile('hello1.txt', content,err => {
  if (err) throw err;
  console.log('File has been saved!');
});
fs.appendFile('example.txt', '\nThis is appended content.', err => {
  if (err) throw err;
  console.log('Content appended!');
});
fs.unlink('hello.txt', err => {
  if (err) throw err;
  console.log('File was deleted.');
});



