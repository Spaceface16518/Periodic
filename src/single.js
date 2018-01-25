/* jshint esversion: 6  */
import Element from '../assets/modules/Element';
const sqlite = require('sqlite');
let db = new sqlite.Database('../assets/data/Periodic_Table.db');

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