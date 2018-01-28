/* jshint esversion: 6 */
import Element from '../assets/modules/Element.js';
import {
  logErr
} from '../assets/modules/Error.js'
const Electron = require('electron');
const path = require('path');
const sqlite = require('sqlite');
const BrowserWindow = Electron.remote.BrowserWindow;
const qb = new sqlite.Database('../assets/data/Query.db');

$(document).ready(function() {
  $("td").click(function() {
    let id = this.id; // The id of the table data that was clicked
    expandElement(id); // This parameter will be hot-potatoed for a while
  });
})

function expandElement(elementId) { // that parameter again
  addQuery(elementId) // "the" parameter
  let assetPath = path.join(__dirname + './single.html');
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

function addQuery(query) { // The parameter again
  qb.run('INSERT INTO Queries VALUES ($queryId, $Query)', {
    $queryId: lastId(), // Gets max queryID
    $Query: query // The parameter's final destination is in the querybase. Almost there!
  })
}

function queryBaseInit() {
  qb.run('CREATE TABLE Queries (queryID INTEGER PRIMARY KEY, query TEXT)');

}

lastID = () => {
  qb.run('SELECT MAX(queryID) FROM Queries', (err, rows) => {
    logErr(err);
    return rows;
  })
}
