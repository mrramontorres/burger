// Dependencies
const express = require('express');
const mysql = require('mysql');

// Create express app instance.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  // Be sure to update with your own MySQL password!
  password: '',
  database: 'burgers_db',
});

// Initiate MySQL Connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Routes


// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
