// Import the File System module
const fs = require('fs');
const readline = require('readline');

// Create an interface to accept user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for filename
rl.question('Enter the filename: ', (filename) => {
  rl.question('Enter the initial content: ', (content) => {
    
    // Step 1: Create/Write the file
    fs.writeFile(filename, content, (err) => {
      if (err) throw err;
      console.log(`File '${filename}' created and written successfully.`);

      // Step 2: Read the file contents
      fs.readFile(filename, 'utf8', (err, data) => {
        if (err) throw err;
        console.log('\nInitial File Contents:');
        console.log(data);

        // Step 3: Ask for additional content to append
        rl.question('\nEnter content to append: ', (appendContent) => {
          fs.appendFile(filename, appendContent, (err) => {
            if (err) throw err;
            console.log('Content appended successfully.');

            // Step 4: Read final contents
            fs.readFile(filename, 'utf8', (err, finalData) => {
              if (err) throw err;
              console.log('\nFinal File Contents:');
              console.log(finalData);

              rl.close();
            });
          });
        });
      });
    });
  });
});
