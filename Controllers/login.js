const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken")

const bcrypt = require('bcrypt');
const saltRounds = 10;

async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const userExist = await prisma.user.findUnique({ where: { email: email } })

  if (!userExist) {
    return res.status(400).send({ message: "User does not exist" })
  }

  const passwordMatching = await bcrypt.compare(password, userExist.password);

  if (!passwordMatching) {
    return res.status(400).send({ message: "Invalid credentials" })
  }

  const token = jwt.sign(userExist, process.env.PRIVATE_KEY, { expiresIn: '7D' });

  if (token) {
    return res.status(200).send({ message: "Login successful", token })
  }

  return res.status(500).send({ message: "Login failed" })
}

module.exports = login
