const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fileContent = "World";
	fileName = "File.txt"
	fs.writeFile(fileName, fileContent)
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }