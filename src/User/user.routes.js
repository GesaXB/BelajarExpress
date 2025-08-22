const express = require("express")
const { getUsersController } = require("./user.controller")
const router = express.Router()

router.get("/", getUsersController)

module.exports = router
