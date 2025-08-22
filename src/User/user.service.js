const { getAll, create,  } = require("./user.repository")

const getAllUsers = async () => {
  return await getAll()
}

module.exports = {
  getAllUsers,
}
