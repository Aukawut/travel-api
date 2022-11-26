const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql2');
require('dotenv').config()
app.use(cors())

const connection = mysql.createConnection(process.env.DATABASE_URL);

app.get('/', (req, res) => {
    console.log("Just got a request!")
    res.send({"msg" :"Hello World"})
})
app.get('/attractions', (req, res) => {

    connection.query(
        'SELECT * FROM attractions',
        function(err, results, fields) {
            console.log(results);
         res.send(results)
        }
      );
})
app.listen(process.env.PORT || 5000)
// connection.end()