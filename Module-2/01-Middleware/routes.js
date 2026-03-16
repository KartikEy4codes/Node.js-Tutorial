import express from "express";

const router = express.Router();

router.post("/create", (req, res) => {
    const { name, age } = req.body;

    res.json({
        message: "User created",
        name,
        age
    });
});

export default router;