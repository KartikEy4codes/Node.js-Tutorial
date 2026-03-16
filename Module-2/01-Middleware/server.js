import express from "express";
import logger from "./middleware.js";
import userRoutes from "./routes.js";

const app = express();

app.use(express.json());
app.use(logger);

app.use("/api/users", userRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});