const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = process.env.NODE_ENV === "developmentx";
const backend = require("../backend/server");
const fs = require('fs-extra')
//const url = require('url')
const url = require('node:url');
//const cors = require("cors");

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (isDev) {
    mainWindow.loadURL("http://localhost:4001/sites"); // For development
  } else {

    //LOOKING FOR INDEX.HTML
    let lookups = [
      path.join(__dirname, "../dist/frontend/index.html"),
      path.normalize(path.join(__dirname, '/../../index.html')), //works in production
      path.normalize(path.join(__dirname, '../frontend/build/index.html')), //works in development after react_build
    ];


    let indexFile = null;
    for(let i=0; i < lookups.length; i++){
      let lookup = lookups[i];
      if(fs.existsSync(lookup)){
        indexFile = lookup;
        break;
      }
    }

    console.log(indexFile)

    /*
    let lUrl = new URL(indexFile);
    lUrl.protocol = 'file';
    lUrl.slashes = true;
    */
    //mainWindow.loadURL("file://"+indexFile);
    let myUrl = url.format(
        { pathname: indexFile, protocol: 'file:', slashes: true });

    mainWindow.loadURL(myUrl);

    mainWindow.webContents.once('dom-ready', () => {
      mainWindow.webContents.send("redirectToGivenLocation", '/sites');
    });

  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

app.on("ready", () => {
  backend.startServer();
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
