import express from "express";

const router = express.Router();

router.get('/users', (req, res) => {
    res.send('Howdy')
})

export default router