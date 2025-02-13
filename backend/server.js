const express = require("express");
const path = require("path");
const cors = require("cors");
const { exec } = require("child_process");

const apiMain = require('./src-main/bridge/api-main');
const QuiqrAppConfig    = require('./src-main/app-prefs-state/quiqr-app-config');

let pogoconf = QuiqrAppConfig();
global.pogoconf = pogoconf;


const app = express();

const startServer = () => {

  app.use(cors());
  app.use(express.json());

  for(var key in apiMain){
    app.post("/api/"+key, (req, res) => {

      const { data } = req.body;
      const { args } = req.body;
      const method = req.path.split('/')[2]
      let context = {};

      context.reject = function(error){
        let pack = {
          key: method+"Response",
          //token: args.token,
          response: {error:error?error.stack:'Something went wrong.'}
        };
        //event.sender.send('messageAsyncResponse', pack);
        console.log('API_MAIN_FAIL: '+ method, pack);
      }

      context.resolve = function(response){
        let pack = {
          key: method+"Response",
          //token: args.token,
          response
        };

        res.json({ received: pack });
        //event.sender.send('messageAsyncResponse', pack);
        console.log('API_MAIN_RESPONDED: '+ method, pack);
      }


      apiMain[method](data, context);

      console.log("data",data)

    });

  }

  // Serve static files from the Vite React build
  // app.use(express.static(path.join(__dirname, "../dist/frontend")));

  /*
  app.get("/api", (req, res) => {
    res.json({ message: "Hello from Express API!" });
  });
  */

  /*
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
  */

  // Catch-all route to serve the React app
  /*
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/frontend/index.html"));
  });
  */

  const PORT = 5150;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

};

module.exports = { startServer };
