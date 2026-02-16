const nayapromise = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if(a == 2){
        resolve("Success");
    } else {
        reject("Failed");
    }
})
nayapromise.then((message) => {
    console.log("This is in the then " + message);
}).catch((message) => {
    console.log("This is in the catch " + message);
}       );
