const { getAllProducts, createProduct } = require("./product.service")

const getProductsController = async (req, res) => {
  try {
    const products = await getAllProducts()
    res.status(200).send({
      message: "Data berhasil diambil",
      data: products
    })
  } catch (error) {
    res.status(500).send({error: error.message})
  }
}

const createProductController = async(req, res) => {
  try {
    const dataProduct = req.body
    const product = await createProduct(dataProduct)
    res.status(201).send({
      data: product,
      message: "Data product berhasil di create"
    })
  } catch (error) {
    res.status(error.statusCode || 500).send({ error: error.message })
  }
}

module.exports = {
  getProductsController,
  createProductController
}
