// Import the 'fs' module to interact with the file system
const fs = require("fs");
const path = require("path");

// Function to create a new folder
function createDroneVideoFileFolder(folderName) {
	// Define the path where the new folder will be created
	const dirPath = path.join(process.cwd(), folderName);

	// Check if the folder already exists
	if (!fs.existsSync(dirPath)) {
		// Create the new folder
		fs.mkdirSync(dirPath);
		// Move into the created/existing directory
		process.chdir(dirPath);
		console.log(`Changed working directory to: ${dirPath}`);
	
		// Create a folder for each camera - Mini 3 Pro, Avata 2
		const drones = ["[01] Mini 3 Pro", "[02] Avata 2"];
		drones.forEach((drone) => {
			const droneFolder = path.join(dirPath, drone);
			fs.mkdirSync(droneFolder);
		});
		console.log(`Drone Video File Folder "${folderName}" created successfully.`);
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
	createDroneVideoFileFolder(folderName);
}
