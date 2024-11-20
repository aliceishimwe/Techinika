const express = require("express");
const router = require("./Routers/index")

// Initialize the Express app
const app = express();

// Use body-parser middleware
// app.put('/api/project/:id', updateProject);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router)

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app