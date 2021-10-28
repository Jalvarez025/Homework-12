const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'IronMan123',
    database: 'company_db'
  },
console.log(`Connected to the company_db database.`)
);

db.query('SELECT * FROM employee', function (err, results) {
  console.log(results);
});

db.query('SELECT * FROM department', function (err, results) {
  console.log(results);
});

db.query('SELECT * FROM role', function (err, results) {
  console.log(results);
});

