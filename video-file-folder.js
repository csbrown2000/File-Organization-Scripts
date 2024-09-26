// Import the 'fs' module to interact with the file system
const fs = require("fs");
const path = require("path");

// Function to create a new folder
function createVideoFileFolder(folderName) {
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

	// Move into the created/existing directory
	process.chdir(dirPath);
	console.log(`Changed working directory to: ${dirPath}`);

	// Create a folder for each camera - Mini 3 Pro, Avata 2, GoPro Max 360, GoPro Hero 7, GoPro Hero 5, IPhone
	const cameras = ["Mini 3 Pro", "Avata 2", "GoPro Max 360", "GoPro Hero 7", "GoPro Hero 5", "IPhone"];
	cameras.forEach((camera) => {
		const cameraFolder = path.join(dirPath, camera);
		fs.mkdirSync(cameraFolder);
		console.log(`Folder "${camera}" created successfully.`);
	});
	console.log(`Video File Folder "${folderName}" created successfully.`);
}

// Take user input from the command line
const folderName = process.argv[2];

// Check if the folder name is provided
if (!folderName) {
	console.log("Please provide a folder name as an argument.");
} else {
	createVideoFileFolder(folderName);
}
