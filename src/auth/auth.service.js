const bcrypt = require("bcrypt")
const { createUser, findByEmail } = require("../User/user.repository")

const registerUser = async (data) => {
  const { name, password, email } = data

  if (!name || !password || !email) {
    throw new Error("Nama, email, dan password harus di isi")
  }

  const existingUser = await findByEmail(email)
  if (existingUser) {
    throw new Error("Email sudah digunakan")
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  return await createUser({
    name,
    email,
    password: hashedPassword
  })
}

module.exports = {
  registerUser
}
