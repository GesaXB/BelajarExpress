const prisma = require("../db/index")

const getProducts = async () => {
  return prisma.product.findMany()
}

module.exports = {
  getProducts
}
