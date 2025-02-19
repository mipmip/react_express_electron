
const { BrowserWindow, ipcMain } = require('electron');
const crypto = require("crypto");

/*
const child = utilityProcess
  .fork()
  .on("spawn", () => console.log("spawned new utilityProcess"))
  .on("exit", (code) => console.log("existing utilityProcess"));
*/

class BackgroundJobRunner{

  run(action , params ) {

    //console.log(action)
    //console.log(params)

    return new Promise((resolve, reject)=>{
      let actionWindow = new BrowserWindow({
        webPreferences: {
          nodeIntegration: true,
          enableRemoteModule: true
        },
        show: false,
        backgroundColor:"#ffffff"
      });
      let html = `<html><body><p>Running Action.</p></body></html>`;
      actionWindow.loadURL("data:text/html;charset=utf-8," + encodeURIComponent(html));

      let channel = crypto.randomBytes(16).toString("hex");
      ipcMain.once(channel, (event, {response, e})=>{
        actionWindow.close();
        if(e==null){
          console.log(response)
          resolve(response);
        }
        else{
          console.log(e)
          reject(e);
        }
      });
      /*
      actionWindow.webContents.executeJavaScript('console.log("hallo")')
        .then((result) => {
          console.log(result) // Will be the JSON object from the fetch call
        })
        */

      /*
      actionWindow.webContents.executeJavaScript('', true)
  .then((result) => {
    console.log(result) // Will be the JSON object from the fetch call
  })

      */

      /*
      actionWindow.webContents.executeJavaScript(`
const action = require('${action.replace(/\\/g,'/')}');
const { ipcRenderer } = require('electron');

action(${JSON.stringify(params)}).then((response)=>{
    console.log("hall9o")
    //ipcRenderer.send('${channel}', {response,e:null});
},(e)=>{
    console.log(e)
    //ipcRenderer.send('${channel}', {response:null,e});
});
`);
      */
    });
  }
}

module.exports = BackgroundJobRunner;
