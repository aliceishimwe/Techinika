const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function updateresourcetype(req, res) {
  const { id } = req.params; 
  const { Name,Description} = req.body;  

  try {
    const updateresourcetype = await prisma.resourcetype.update({
      where: {
        id: parseInt(id) 
      },
      data: {
        Name,
        Description
      }
    });
    res.json(updateresourcetype); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update project" });
  }
}
module.exports = updateresourcetype