const fs = require("fs");

fs.readFile("test.txt", "utf-8", function(err, data){
    if(err){
        console.log("Error: ", err);
        return;
    }                                       
    console.log(data);
});
