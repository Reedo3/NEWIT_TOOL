const express = require("express");
const app = express();
const cors = require('cors');

// Enable CORS security and add expres
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req,res)=>{
    res.send('Hello World');
});

// User Login Authentication
app.get("/loginAuth", (req,res) => 
{
    // Verify the user with the REST API
    res.send('Hellow Newit');
    console.log("Hello Newit");
});

// Register a new user
app.post("/registerUser", (req,res) =>
{
    // Verify the user with the REST API
    res.send('Hellow Newit');
    console.log("Hello NEWT!");
});



// Microservice exist at port 3002
app.listen(3002);