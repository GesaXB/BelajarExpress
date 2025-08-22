const express = require("express")
const dotenv = require("dotenv")

dotenv.config()
const app = express()
app.use(express.json())

const categoryRoutes = require("../src/Category/category.routes")
const productRoutes = require("../src/Product/product.routes")
const userRoutes = require("../src/User/user.routes")
const authRoutes = require("../src/auth/auth.routes")
const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log("Server berjalan diport", PORT)
})

app.use("/categories", categoryRoutes)
app.use("/products", productRoutes)
app.use("/users", userRoutes)
app.use("/auth", authRoutes)
