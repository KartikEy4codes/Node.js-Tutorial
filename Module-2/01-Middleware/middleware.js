const express = require('express');
const app = express();

// Middleware function
app.use((req, res, next) => {
    console.log('Middleware function executed');
    next(); // Call the next middleware or route handler
});

// Route handler
app.get('/', (req, res) => {
    res.send('Hello World');
}); 
app.listen(3000,()=>{
    console.log('Server is running on port 3000');


})

const student = {
    name:'Ayush',
    age: 25,
    section : 'G',
    roll : 5
}

