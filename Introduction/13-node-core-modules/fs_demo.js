const fs = require("fs");

fs.writeFileSync("test.txt", "Hello Node");
const data = fs.readFileSync("test.txt", "utf-8");
console.log(data);
