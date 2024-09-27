# Folder Creation Scripts

This repository contains a collection of Node.js scripts designed to simplify the process of creating structured folders for various purposes. These scripts automate the creation of directories with predefined structures, saving time and ensuring consistency in project organization.

## General Usage

Most scripts in this collection follow a similar usage pattern:

```
node script-name.js [arguments]
```

Replace `script-name.js` with the actual script filename and provide any required arguments.

## Scripts

### create-folder.js

#### Purpose
This script creates a single folder in the current working directory.

#### Usage
```
node create-folder.js folder-name
```

### drone-video-file-folder.js

#### Purpose
This script creates a folder structure specifically for organizing drone video files. It creates a main folder with the given name and two subfolders for different drone models: "Mini 3 Pro" and "Avata 2".

#### Usage
```
node drone-video-file-folder.js folder-name
```

### video-file-folder.js

#### Purpose
This script creates a comprehensive folder structure for organizing video files from various cameras. It creates a main folder with the given name and prompts the user to create subfolders for different camera models.

#### Usage
```
node video-file-folder.js folder-name
```

### create-numbered-folder.js

#### Purpose
This script creates a single numbered folder with a user-specified name. The number is padded with a leading zero if necessary.

#### Usage
```
node create-numbered-folder.js
```
The script will prompt for a number and folder name.

#### Example Interaction and Output
Here's an example of how the interaction with the script might look:

```
Enter a number for the folder (e.g., 1-99): 7
Enter a name for the folder: Project Alpha
Folder "[07] Project Alpha" created successfully.
```

After running this script, you would see a new folder in your current directory:

```
[07] Project Alpha
```

This format allows for easy organization and sorting of numbered project folders.

### numbered-folder-structure.js

#### Purpose
This script creates a series of numbered folders, allowing the user to specify names for each folder. It can also add an optional archive folder at the end.

#### Usage
```
node numbered-folder-structure.js
```
The script will prompt for folder names and continuation preferences.

#### Example Output
After running the script, your folder structure might look like this:

```
[01] Project Planning
[02] Research
[03] Design
[04] Development
[05] Testing
[06] Documentation
[99] Archive
```

This structure allows for easy organization and sorting of project folders, with the option to add an archive folder at the end for completed or inactive items.

## Adding as Aliases

To use these scripts more conveniently, you can add them as aliases in your `.zshrc` file. Here are example aliases:

```zsh
alias mkfolder='node /path/to/create-folder.js'
alias mkdronefolder='node /path/to/drone-video-file-folder.js'
alias mkvideofolder='node /path/to/video-file-folder.js'
alias mknumberedfolder='node /path/to/create-numbered-folder.js'
alias mknumberedstructure='node /path/to/numbered-folder-structure.js'
```

Replace `/path/to/` with the actual path to your scripts. After adding these aliases and reloading your `.zshrc` file, you can use the scripts like this:

```
mkfolder new-folder
mkdronefolder drone-project
mkvideofolder video-project
mknumberedfolder
mknumberedstructure
```

This allows you to quickly create structured folders from anywhere in your terminal.
