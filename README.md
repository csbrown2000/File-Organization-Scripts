# Folder Creation Scripts

This repository contains a collection of Node.js scripts designed to simplify the process of creating structured folders for various purposes. These scripts automate the creation of directories with predefined structures, saving time and ensuring consistency in project organization.

## General Usage

All scripts in this collection follow a similar usage pattern:

```
node script-name.js folder-name
```

Replace `script-name.js` with the actual script filename and `folder-name` with your desired folder name.

## Scripts

### create-folder.js

#### Purpose
This script creates a single folder in the current working directory.

#### Example
```
node create-folder.js my-new-folder
```
This will create a folder named "my-new-folder" in the current directory.

### drone-video-file-folder.js

#### Purpose
This script creates a folder structure specifically for organizing drone video files. It creates a main folder with the given name and two subfolders for different drone models: "Mini 3 Pro" and "Avata 2".

#### Example
```
node drone-video-file-folder.js drone-footage-2023
```
This will create a folder named "drone-footage-2023" with two subfolders: "Mini 3 Pro" and "Avata 2".

### video-file-folder.js

#### Purpose
This script creates a comprehensive folder structure for organizing video files from various cameras. It creates a main folder with the given name and subfolders for different camera models: "Mini 3 Pro", "Avata 2", "GoPro Max 360", "GoPro Hero 7", "GoPro Hero 5", and "IPhone".

#### Example
```
node video-file-folder.js video-project-2023
```
This will create a folder named "video-project-2023" with subfolders for each camera model.

## Adding as Aliases

To use these scripts more conveniently, you can add them as aliases in your `.zshrc` file. Here are example aliases:

```zsh
alias mkfolder='node /path/to/create-folder.js'
alias mkdronefolder='node /path/to/drone-video-file-folder.js'
alias mkvideofolder='node /path/to/video-file-folder.js'
```

Replace `/path/to/` with the actual path to your scripts. After adding these aliases and reloading your `.zshrc` file, you can use the scripts like this:

```
mkfolder new-folder
mkdronefolder drone-project
mkvideofolder video-project
```

This allows you to quickly create structured folders from anywhere in your terminal.
