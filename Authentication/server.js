/* TODO:
- Need to support sessions in the server.js, see how theat joint is done
- Need to see how to make the login get call to verify our user
- See why the GET isn't functional.
- Make the post function for logging in use my passport stuff
- Make the verification passport function, qery my database.

*/
const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Users = require('./models/users')
const bcrypt = require("bcrypt")
 const passport = require("passport")

// connect to the database
mongoose.connect('mongodb://localhost/db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Initialize Passport
const initializePassport = require('./passport-config')
// Initialize passport concfiguration
// This initialize passport will be passed into the login verification

// Initialize the Passport
initializePassport(passport, (user_email) => {

    // Find email in db
    res_db = await Users.find({ email: user_email});

    // If false return false and return null
    if( res_db.length == 0)
    {
        return null;
    }
    // If exists return true and get user info
    else
    {
        const user  = new Users({
            user.email = ;
            user.password = ;
            user.valid = ;
        });
        return 
    }

});

// This is the Mongo DB Connection
const db = mongoose.connection;
db.on('error', (e) => {console.error(e)});
db.once('open', () => {console.log('Connection is up.')});


// Enable CORS security and add expres
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.urlencoded({extended:false}));

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

// Register a new user, and add the new user
app.post("/registerUser", async (req,res) =>
{
    // Hash the Password, so the password is secure
    const hashedPassword = await bcrypt.hash(req.body.password, 10);


    // Create the User object based off the NOSQL.
    const user = new Users( {
        email: req.body.email,
        password: hashedPassword // We will need to encrypt this password with bcrypt
    });
    console.log(user.email);
    console.log(user.password)
    // Try to find the email, if doesn't exist add it.
    try{
        // Query for the email in the user database.
        res_db = await Users.find({ email: user.email });
        // Result doesn't exist thus add it into database
        if( res_db.length == 0 )
        {
            try{
                // Write to the EC Database
                const newUser  = await user.save();
                res.status(201).json(newUser);
            }catch(err) {
                // Failed to save the error message   
                res.status(400).json({ message: err.message});
            }
        }
        // Result exists already thus, don't add it and let client know it already exists
        else
        {
            // User already exists in the database.
            res.status(409).json({ message: 'User already exists'});
        } 
    }catch(err){
        // Failed to find the error message.
        res.status(400).json({ message: err.message});
    }
});



// Microservice exist at port 3002
app.listen(3002);