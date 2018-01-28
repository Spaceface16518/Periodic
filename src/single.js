/* jshint esversion: 6  */
import Element from '../assets/modules/Element';
import {
  logErr
} from '../assets/modules/Error.js';
const sqlite = require('sqlite');
const db = new sqlite.Database('../assets/data/Periodic_Table.db');
const qb = new sqlite.Database('../assets/data/Query.db');

// The single.html page will have areas with id's that will be filled
// by this function. Please keep the naming convention of the id's with
// the naming of the tables in the database.
let query = () => {
  qb.get('SELECT query FROM Queries WHERE queryID=$maxid', {
    $maxid: getMaxId();
  })
}

write = () => {
  let HTMLelements = []; // Fill with elements available in single.html
  fillHTMLelements();
  $.each(HTMLelements, function(i) {
    $(HTMLelements[i]).click(function() {
      let selector = "#" + HTMLelements[i];
      $(selector).text(Elem.getInfo(HTMLelements[i]));
    });
  });
};

getMaxId = () => {
  qb.get('SELECT MAX(queryID) FROM Queries', (err, rows) => {
    logErr(err);
    return rows
  })
}

fillHTMLelements = () => {
  // NOTE: The HTMLDOM method getElementByClassName returns an array
  let elements = document.getElementsByClassName('element');
  for (var i = 0; i < elements.length; i++) {
    HTMLelements.push(elements[i])
  }
}
