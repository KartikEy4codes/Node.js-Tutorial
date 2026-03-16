const express = require("express");
const app = express();

const logger = require("./middleware/logger");
const userRoutes = require("./routes/userRoutes");

app.use(express.json()); // parse JSON
app.use(logger); // middleware

app.use("/api/users", userRoutes); // routes

app.listen(3000, () => {
    console.log("Server running on port 3000");
});