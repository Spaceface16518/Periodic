/* jshint esversion: 6 */
import Element from '../assets/modules/Element.js';
const Electron = require('electron');
const path = require('path');
const BrowserWindow = Electron.remote.BrowserWindow;
const qb = new sqlite.Database('../assets/data/Query.db');

$(document).ready(function() {
  $("td").click(function(){
    let id = this.id;
  })
})

function expandElement(elementId) {
  let assetPath = path.join(__dirname + './single.html');
  let win = new BrowserWindow({
    width: 200,
    height: 275
  });
  win.on('close', () => {
    win = null;
  });
  // IDEA: win.postMessage(id, *);
  // win.eval is another possiblity. See issue #4 for info.
  win.loadURL(assetPath);
  win.show();
}
// TODO: add function that calls this function
