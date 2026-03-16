const express = require("express");
const app = express();

const logger = require("./middleware");
const userRoutes = require("./routes");

app.use(express.json());
app.use(logger);

app.use("/api/users", userRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});