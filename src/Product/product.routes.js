const express = require("express")
const { getProductsController, createProductController } = require("./product.controller")
const router = express()

router.get("/", getProductsController)
router.post("/", createProductController)

module.exports = router
