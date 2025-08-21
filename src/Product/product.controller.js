const { getAllProducts } = require("./product.service")

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

module.exports = {
  getProductsController
}
