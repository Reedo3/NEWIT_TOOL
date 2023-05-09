const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());


app.get('/', (req,res)=>{
    res.send('Hello World');
}
)
// User Login Authentication
app.get("/loginAuth", (req,res) => 
{
    res.send('Hellow Newit');
    console.log("Hello Newit");
})

// Microservice exist at port 3002
app.listen(3002);