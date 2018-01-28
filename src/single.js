/* jshint esversion: 6  */
import Element from '../assets/modules/Element';
import {
  logErr
} from '../assets/modules/Error.js';
const sqlite = require('sqlite');
let db = new sqlite.Database('../assets/data/Periodic_Table.db');

let id;

$("td").click(function() {
  id = this.id;
  let Elem = new Element(id);
  write();
});
const qb = new sqlite.Database('../assets/data/Query.db');

// The single.html page will have areas with id's that will be filled
// by this function. Please keep the naming convention of the id's with
// the naming of the tables in the database.
write = () => {
  let HTMLelements = [/* None currently available */]; // Fill with elements available in single.html
  $.each(HTMLelements, function (i) {
    $(HTMLelements[i]).click(function () {
      let selector = "#" + HTMLelements[i];
      $(selector).text(Elem.getInfo(HTMLelements[i]));
    });
  });
};getMaxId = () => {
  qb.get('SELECT MAX(queryID) FROM Queries', (err, rows) => {
    logErr(err);
    return rows
  })
}
