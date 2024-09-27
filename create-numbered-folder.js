const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number for the folder (e.g., 1-99): ', (number) => {
  rl.question('Enter a name for the folder: ', (folderName) => {
    const formattedNumber = number.padStart(2, '0');
    const fullFolderName = `[${formattedNumber}] ${folderName}`;

    fs.mkdir(fullFolderName, (err) => {
      if (err) {
        console.error('Error creating folder:', err);
      } else {
        console.log(`Folder "${fullFolderName}" created successfully.`);
      }
      rl.close();
    });
  });
});
