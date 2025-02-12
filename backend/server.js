const express = require("express");
const path = require("path");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the Vite React build
app.use(express.static(path.join(__dirname, "../dist/frontend")));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express API!" });
});

app.get("/api/message", (req, res) => {
  //res.json({ message: "Hello from the backend!" });

  const response = {};
  let msg = "";
  exec("which nix", (error, stdout, stderr) => {
    if (error) {
      msg = error.message;
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      msg = stderr;
      console.error(`Stderr: ${stderr}`);
      return;
    }
    if (stdout.trim()) {
      msg = `Path to nix: ${stdout.trim()}`;
      console.log(`Path to nix: ${stdout.trim()}`);
    } else {
      msg = "nix is not installed or not in PATH.";
      console.log("nix is not installed or not in PATH.");
    }
    res.json({ message: msg });
  });
});

app.post("/api/data", (req, res) => {
  const { data } = req.body;
  res.json({ received: data });
});

// Catch-all route to serve the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/frontend/index.html"));
});

const PORT = 5150;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// const startServer = () => {
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => {
//     console.log(`Express server is running on http://localhost:${PORT}`);
//   });
// };

// module.exports = { startServer };
