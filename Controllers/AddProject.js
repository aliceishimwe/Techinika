const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Controllers/AddProject.js

// Function to create a project
exports.project = (req, res) => {
  // Logic for adding a project
  res.send('Project added successfully');
};

// Function to update a project
exports.updateProject = (req, res) => {
  // Logic for updating a project by ID
  const projectId = req.params.id;
  // Use projectId to find and update the project
  res.send(`Project ${projectId} updated successfully`);
};


async function addProject(req, res) {
  try {
    const project = await prisma.project.create({
      data: {
        ProjectName: req.body.ProjectName,
        Progress: req.body.Progress,
        StartDate: new Date(req.body.StartDate),  
        EndDate: new Date(req.body.EndDate)       
      }
    });
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Project creation failed" });
  }
}
module.exports = addProject
