const http = require("http");
const htmlGet = require("./helpers/htmlGet.js");
const readFiles = require("./helpers/readFiles.js");
const PORT = 8000;
const host = "localhost";

const onReq = (req, res) => {
    const url = req.url;
    if(url === "/") {
        htmlGet("index.html", res);
    } else if(url === "/cars") {
        htmlGet("findCars.html", res);
    } else if(url.match("\.css$")) {
        readFiles(url, res, "text/css", "UTF-8");
    } else if(url.match("\.js$")) {
        readFiles(url, res, "text/js", "UTF-8");
    } else if(url.match("\.jpg$")) {
        readFiles(url, res, "image/jpg");
    }
}

const server = http.createServer(onReq);
server.listen(PORT, host, ()=> {
    console.info(`is listening on ${host}:${PORT}`)
});