const express = require("express");
const app = express();

// User Login Authentication
app.get("/loginAuth", (req,res) => 
{
    console.log("Squirtle")    
    res.send("Hi")
})


// Microservice exist at port 3002
app.listen(3002);