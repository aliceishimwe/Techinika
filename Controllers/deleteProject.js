const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function deleteProject(req, res) {
  const { id } = req.params;  // Get the project ID from the request parameters

  try {
    // Delete the project with the given ID
    await prisma.project.delete({
      where: {
        id: parseInt(id),  // Ensure the id is an integer
      },
    });
    res.json({ message: 'Project deleted successfully' });  // Respond with success message
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete project' });
  }
}

module.exports = {  deleteProject };
