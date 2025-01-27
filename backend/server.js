const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the Vite React build
app.use(express.static(path.join(__dirname, "../dist/frontend")));

// Example API route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express API!" });
});

// Catch-all route to serve the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/frontend/index.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
