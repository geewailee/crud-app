const { Pool } = require("pg");

const uri =
  "postgres://uqfavino:u_lwPzKYfPe_SNNJQJj-yVgGCut_0RT1@ruby.db.elephantsql.com:5432/uqfavino";

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: uri,
});

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};

// CREATE TABLE taskList (
//   id SERIAL PRIMARY KEY,
//   task VARCHAR
//   )

// INSERT INTO taskList(task)
// VALUES ('go shopping');
