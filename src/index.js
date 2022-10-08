const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  const content = await fs.writeFile(fileName, fileContent, function (err) {
    if (err) throw err;
  });
  return content;
};

const myFileReader = async (fileName) => {
  // write code here
  // dont chnage function name
  const content = await fs.readFile(fileName, "utf8", function (err) {
    if (err) throw err;
  });
  return content;
};

const myFileUpdater = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  const content = await fs.appendFile(fileName, fileContent, function (err) {
    if (err) throw err;
  });
  return content;
};

const myFileDeleter = async (fileName) => {
  // write code here
  // dont chnage function name
  const content = fs.unlink(fileName, function (err) {
    if (err) throw err;
  });
  return content;
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };