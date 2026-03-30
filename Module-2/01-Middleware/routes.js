import express from "express";

const router = express.Router();

router.post("/create", (req, res) => {
    const { name, age } = req.body;

    res.json({
        name: "Ayush",
        Section : "G",
        age
    });
});

export default router;