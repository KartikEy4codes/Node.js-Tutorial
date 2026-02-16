const fs = require("fs");

fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data);
  }
});
