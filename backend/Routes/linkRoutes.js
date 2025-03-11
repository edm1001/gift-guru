const express = require("express");
const router = express.Router();

const productData = require("../../frontend/src/db/Shop/Categories.json");

router.get('/', (req, res) => {
    res.send(productData);
});

module.exports = router;