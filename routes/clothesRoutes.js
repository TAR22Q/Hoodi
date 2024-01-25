const express = require("express");
const clothesController = require("./../controllers/clothesController");

const router = express.Router();

router.get("/getclothes", clothesController.getAllClothes);
router.post("/postaclothe", clothesController.createClothe);

module.exports = router;
