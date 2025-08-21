const { getProducts } = require("./product.repository")

const getAllProducts = async () => {
  return await getProducts()
}

module.exports = {
  getAllProducts
}
