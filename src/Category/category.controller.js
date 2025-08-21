const {
  getAllCategories,
  createCategories,
  updateCategory,
  deleteCategory
} = require("./category.service")

const getCategoriesController = async (req, res) => {
  try {
    const categories = await getAllCategories()
    res.status(200).send({
      message: "Data berhasil diambil",
      data: categories,
    })
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

const createCategoriesController = async (req, res) => {
  try {
    const categoryData = req.body
    const category = await createCategories(categoryData)
    res.status(201).send({
      message: "Data berhasil di create",
      data: category
    })
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

const updateCategoryController = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const categoryData = req.body
    const category = await updateCategory(id, categoryData)
    res.status(200).send({
      message: "Data berhasil diupdate",
      data: category
    })
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

const deleteCategoryController = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const result = await deleteCategory(id)
    res.status(201).send("Data berhasil dihapus")
  } catch (error) {
    res.status(500).send({error: error.message})
  }
}

module.exports = {
  getCategoriesController,
  createCategoriesController,
  updateCategoryController,
  deleteCategoryController
}
