const { registerUser } = require("./auth.service")

const registerUserController = async (req,res) => {
  try {
  const dataUser = req.body
  const newUser = await registerUser(dataUser)

  res.status(201).send({
    message: "Data user berhasil dibuat",
    data: newUser
  })
  } catch (error) {
  res.status(500).send({ error: error.message })
  }
}

module.exports = {
  registerUserController
}
