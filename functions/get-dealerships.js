/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
 const md5 = require('spark-md5');


 function main(params) {
   return {
     entries: params.rows.map((row) => { return { 
         id: row.doc.id,
         city: row.doc.city,
         state: row.doc.state,
         st: row.doc.st,
         address: row.doc.address,
         zip: row.doc.zip,
         lat: row.doc.lat,
         long: row.doc.long,
     }})
   };
 }
