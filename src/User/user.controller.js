const { getAllUsers, createUser } = require("./user.service")

const getUsersController = async (req, res) => {
  try {
    const users = await getAllUsers()
    res.status(200).json({
      message: "Data berhasil diambil",
      data: users
    })
  } catch (error) {
    res.status(500).send({error: error.message})
  }
}


module.exports = {
  getUsersController
}
