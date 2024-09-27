// Import the 'fs' module to interact with the file system
const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Function to create a new folder
function createNumberedFolders() {
	
	// Create a readline interface
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	// Define a recursive function to create numbered folders
	function createFolder(index) {
		if (index > 99) {
			rl.close();
			return;
		}

		// Pad the index with leading zeros
		const paddedIndex = String(index).padStart(2, '0');
		
		// Prompt the user for a folder name
		rl.question(`Enter a name for folder [${paddedIndex}]: `, (folderName) => {
			// Construct the full path for the numbered folder
			const numberedFolderName = `[${paddedIndex}] ${folderName}`;
			const numberedFolderPath = path.join(process.cwd(), numberedFolderName);
			
			// Create the numbered folder
			fs.mkdirSync(numberedFolderPath);
			
			// Log a success message
			console.log(`Created folder: ${numberedFolderName}`);
			
			// Ask if the user wants to continue after the first folder
			if (index == 1) {
				createFolder(index + 1);
			} else {
				rl.question('Continue creating folders? (Y/n): ', (answer) => {
					if (answer.toLowerCase() !== 'n') {
						createFolder(index + 1);
					} else {
						rl.question('Would you like to add an archive folder? (Y/n): ', (answer) => {
							if (answer.toLowerCase() !== 'n') {
								fs.mkdirSync(path.join(process.cwd(), '[99] Archive'));
								console.log('Folder creation completed.');
								rl.close();
							} else {
								console.log('Folder creation stopped.');
								rl.close();
							}
						});
					}
				});
			}
		});
	}

	// Start creating numbered folders from index 1
	createFolder(1);
}


createNumberedFolders();
