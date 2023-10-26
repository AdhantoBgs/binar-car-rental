const path = require("path");

const publicDir = (url) => path.join(__dirname, './../../public', url);

module.exports = publicDir;