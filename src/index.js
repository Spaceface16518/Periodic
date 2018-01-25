/* jshint esversion: 6 */
const Electron = require('electron');
const path = require('path');
const BrowserWindow = Electron.remote.BrowserWindow;

function expandElement(elementId) {
  let assetPath = path.join(__dirname + '/single.html');
  let win = new BrowserWindow({
    width: 200,
    height: 275
  });
  win.on('close', () => {
    win = null;
  });
  win.loadURL(assetPath);
  win.show();
}
// TODO: add function that calls this function