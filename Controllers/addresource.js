const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function add(req, res) {
    try {
      const newResource = await prisma.resources.create({
        data: {
          Name:req.body.Name,
          Description: req.body.Description,
          resourcetype: { connect: { id: resourcetypeId } } 
        }
      });
  
      res.json(newResource);
    } catch (error) {
      console.error('Error details:', error); 
      res.status(500).json({ error: "Resources Type Addition failed" });
    }
  } 
  module.exports = add;
