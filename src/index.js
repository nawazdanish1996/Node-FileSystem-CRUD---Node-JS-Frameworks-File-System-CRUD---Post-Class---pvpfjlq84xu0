const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fileContent = "Hello"
	fileName = fs.writeFileSync('File.txt', fileContent)
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fileName = fs.readFile('new.txt')
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fileContent = "Hello World"
	fileName = fs.appendFile('File.txt', fileContent)
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fileName = fs.unlink("File.txt")
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }