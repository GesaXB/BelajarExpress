const prisma = require("../db/index")

const getProducts = async () => {
  return prisma.product.findMany()
}

const insertProduct = async (data) => {
  return prisma.product.create({
    data,
  })
}

module.exports = {
  getProducts,
  insertProduct
}
