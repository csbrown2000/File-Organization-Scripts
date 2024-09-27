// Import the 'fs' module to interact with the file system
const fs = require("fs");
const path = require("path");

// Function to create a new folder
function createVideoFileFolder(mainFolderName) {
	// Define the path where the new folder will be created
	const dirPath = path.join(process.cwd(), mainFolderName);

	// Check if the folder already exists
	if (!fs.existsSync(dirPath)) {
		// Create the new folder
		fs.mkdirSync(dirPath);
		console.log(`Folder "${mainFolderName}" created successfully.`);
	} else {
		console.log(`Folder "${mainFolderName}" already exists.`);
	}

	// Move into the created/existing directory
	process.chdir(dirPath);
	console.log(`Changed working directory to: ${dirPath}`);

	// Array of camera names
	const cameras = ["Mini 3 Pro", "Avata 2", "GoPro Max 360", "GoPro Hero 7", "GoPro Hero 5", "IPhone"];

	// Create readline interface for user input
	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout
	});
	var numberPrefix = 0;
	function createCameraFolders(index) {
		// Base case: if we've processed all cameras, end the recursion
		if (index >= cameras.length) {
			readline.close();
			console.log(`Video File Folder "${mainFolderName}" setup completed.`);
			return;
		}

		const paddedIndex = String(numberPrefix + 1).padStart(2, '0');
		const folderName = `[${paddedIndex}] ${cameras[index]}`;
		const cameraFolder = path.join(dirPath, folderName);

		// Ask the user if they want to create this folder
		readline.question(`Create folder "${folderName}"? (y/n): `, (answer) => {
			if (answer.toLowerCase() !== 'n') {
				// Create the folder if the user doesn't say 'n'
				fs.mkdirSync(cameraFolder);
				console.log(`Folder "${folderName}" created successfully.`);
				numberPrefix++;
			} else {
				console.log(`Skipped creating folder "${folderName}".`);
			}

			// Recursive call to process the next camera
			createCameraFolders(index + 1);
		});
	}

	// Start the recursive process with the first camera (index 0)
	createCameraFolders(0);

	console.log(`Video File Folder "${mainFolderName}" created successfully.`);
}

// Take user input from the command line
const mainFolderName = process.argv[2];

// Check if the folder name is provided
if (!mainFolderName) {
	console.log("Please provide a folder name as an argument.");
} else {
	createVideoFileFolder(mainFolderName);
}