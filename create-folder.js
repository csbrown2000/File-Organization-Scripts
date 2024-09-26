// Import the 'fs' module to interact with the file system
const fs = require("fs");
const path = require("path");

// Function to create a new folder
function createFolder(folderName) {
	// Define the path where the new folder will be created
	const dirPath = path.join(process.cwd(), folderName);

	// Check if the folder already exists
	if (!fs.existsSync(dirPath)) {
		// Create the new folder
		fs.mkdirSync(dirPath);
		console.log(`Folder "${folderName}" created successfully.`);
	} else {
		console.log(`Folder "${folderName}" already exists.`);
	}
}

// Take user input from the command line
const folderName = process.argv[2];

// Check if the folder name is provided
if (!folderName) {
	console.log("Please provide a folder name as an argument.");
} else {
	createFolder(folderName);
}
