const prisma = require("../db/index")
const { findById, update, deleteByID } = require("./category.repository")

const getAllCategories = async () => {
  return await prisma.category.findMany()
}

const createCategories = async (categoryData) => {
  const { name, description } = categoryData

  if (!name || !description) {
    throw new Error("error, data tidak di isi penuh")
  }

  return await prisma.category.create({
    data: { name, description }
  })
}

const updateCategory = async (categoryId, categoryData) => {
  const { name, description } = categoryData

  const existing = await findById(categoryId)
  if (!existing) {
    throw new Error("Category not found")
  }

  if (!name || !description) {
    throw new Error("field missing")
  }

  return await update(categoryId, { name, description })
}

const deleteCategory = async (categoryId) => {
  const existing = await findById(categoryId)

  if (!existing) {
    throw new Error("Category not found")
  }

  return await deleteByID(categoryId)
}

module.exports = {
  getAllCategories,
  createCategories,
  updateCategory,
  deleteCategory
}
