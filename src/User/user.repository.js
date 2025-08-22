const prisma = require("../db/index")

const getAll = async () => {
  return await prisma.user.findMany()
}

const findByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email
    }
  })
}

const createUser = async (data) => {
  return await prisma.user.create({
    data: {
      name: data.name,
      password: data.password,
      email: data.email
    }
  })
}

module.exports = {
  getAll,
  findByEmail,
  createUser
}
