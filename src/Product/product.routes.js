const express = require("express")
const { getProductsController } = require("./product.controller")
const router = express()

router.get("/", getProductsController)

module.exports = router
