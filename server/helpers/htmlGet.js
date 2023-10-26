const path  = require("path");
const fs = require("fs");

const htmlGet = (htmlFile, res) => {
    const filepath = path.join("./public", htmlFile);
    fs.readFile(filepath, "UTF-8", (err, html) => {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(html);
    });
}

module.exports = htmlGet;