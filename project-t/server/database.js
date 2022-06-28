const { createPool } = require('mysql');
const express = require("express");
const app = express();
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "xyz",
    connectionLimit: 10,
})

app.get("/",(req, res) => {});

app.listen(3001, () =>{
    console.log("running on port 3001")
});

pool.query(`select * from log`,(err, result, fields)=>{
    if(err){
        return console.log(err)
    }
    return console.log(result)
})
module.exports = pool; 