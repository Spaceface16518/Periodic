/* jshint esversion: 6 */

// This module contains the element class, so you can access the element class
// from the main page.

// This module requires sqlite3 in the main page. Perhaps it is needed here, but
// for now this page does not have sqlite3 required. It all depends on whether an
// imported function can use npm modules that were required on the main page and
// not the module page. Probably best to ask about it on stack overflow.

// This is the order of the tables on the database:
/*
Name, Symbol, Atomic_Number, Atomic_Weight, Density, Melting_Point,
Boiling_Point, Atomic_Radius, Covalent_Radius, Ionic_Radius,
Specific_Volume, Specific_Heat, Heat_Fusion, Heat_Evaporation,
Thermal_Conductivity, Pauling_Electronegativity, First_Ionisation_Energy,
Oxidation_States, Electronic_Configuration, Lattice, Lattice_Constant
*/

// Naming convention for query words:
/*
Capital first letter
Underscores for spaces
Capital letters after underscores
*/

export default class Element {
  constructor(input) {
    this.elementToQuery = input;
    this.queryType = Atomic_Number; // Match this to the value type of the html id's
  }
  getInfo(request) {
    db.get('SELECT $request FROM Periodic_Table WHERE $query = $ID', {
      $request: request,
      $ID: this.elementToQuery,
      $query: this.queryType
    }, (err, rows) => {
      if (err) {
        console.error(err);
      }
      return rows;
    });
  }
}