/* jshint esversion: 6  */
const sqlite = require('sqlite3');
import Element from '../assets/modules/Element';

let db = new sqlite.Database('../assets/data/periodic.db', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connected to the Periodic Database.");
  }
});

db.close((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Disconnected from the Periodic Database.");
  }
});