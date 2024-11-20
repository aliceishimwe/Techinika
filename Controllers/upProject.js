const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function updateProject(req, res) {
  const { id } = req.params; 
  const { ProjectName, Progress, StartDate, EndDate } = req.body;  

  try {
    const updatedProject = await prisma.project.update({
      where: {
        id: parseInt(id) 
      },
      data: {
        ProjectName,
        Progress,
        StartDate: new Date(StartDate), 
        EndDate: new Date(EndDate)
      }
    });
    res.json(updatedProject); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update project" });
  }
}
module.exports = updateProject