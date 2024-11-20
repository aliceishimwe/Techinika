const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bcrypt = require('bcrypt');
const saltRounds = 10;

async function register(req, res) {
  const hash = await bcrypt.hash(req.body.password, saltRounds);
  console.log(hash)

  const userExist = await prisma.user.findUnique({ where: { email: req.body.email } })

  if(userExist) {
    return res.status(400).send({ message: "User already exist" })
  }

  const user = await prisma.user.create({
    data: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash
    }
  })

  if (user) {
    res.status(201).send({ message: "User added successfully", user })
  } else {
    res.status(500).send({ message: "Failed to register a user" })
  }
}

module.exports = register
