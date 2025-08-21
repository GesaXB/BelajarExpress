const prisma = require("../db")

const findById = async (id) => {
  return await prisma.category.findUnique({
    where: { id }
  })
}

const update = async (id, data) => {
  return await prisma.category.update({
    where: { id },
    data
  })
}

const deleteByID = async (id) => {
  return await prisma.category.delete({
    where: { id }
  })
}

module.exports = {
  findById,
  update,
  deleteByID,
}
