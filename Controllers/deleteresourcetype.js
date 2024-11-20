const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function deleteresourcetype(req, res) {
  const { id } = req.params;  // Get the resource ID from the request parameters

  try {
    // Delete the project with the given ID
    await prisma.resourcetype.delete({
      where: {
        id: parseInt(id),  
      },
    });
    res.json({ message: 'resource deleted successfully' });  // Respond with success message
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete project' });
  }
}

module.exports = {  deleteresourcetype };
