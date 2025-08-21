const express = require("express")
const { createCategoriesController, getCategoriesController, updateCategoryController, deleteCategoryController } = require("./category.controller")
const router = express.Router()

router.get("/", getCategoriesController)
router.post("/", createCategoriesController)
router.put("/:id", updateCategoryController)
router.delete("/:id", deleteCategoryController)

module.exports = router
