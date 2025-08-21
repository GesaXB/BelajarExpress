const { getProducts, insertProduct } = require("./product.repository")

const getAllProducts = async () => {
  return await getProducts()
}

const createProduct = async (dataProduct) => {
  const { name, price, stock, category_id } = dataProduct

  if(!name || !price || !stock || !category_id){
    const error = new Error("Data tidak lengkap")
    error.statusCode = 400
    throw error
  }

  return await insertProduct(dataProduct)
}

module.exports = {
  getAllProducts,
  createProduct
}
