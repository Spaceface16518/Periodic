/* jshint esversion: 6  */
import Element from '../assets/modules/Element';
const sqlite = require('sqlite');
let db = new sqlite.Database('../assets/data/Periodic_Table.db');

let id;

$("td").click(function() {
  id = this.id;
  let Elem = new Element(id);
  write();
});

