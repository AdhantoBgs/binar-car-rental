const fs = require("fs");
const publicDir = require("./publicDir.js");

const readFiles = (reqUrl, res, contentType, enc) => {
    const filePath = publicDir(reqUrl);
    const fileStream = fs.createReadStream(filePath, enc);
    res.writeHead(200, {"Content-Type": contentType});
    fileStream.pipe(res);
}

module.exports = readFiles;