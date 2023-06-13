const LocalStrategy = requrie('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserbyEmail){

    // Define function to authenticate the user
    const authenticateUser = (email, password, done ) =>{
        
        // Verify whether User has that email
        // This function will query the database and verify whether  
        const user = getUserbyEmail(email);
        if( user == null)
        {
            return done(null, false,{ message: 'No user with this email.'});
        }

        // Verify the user password is valid or not
        try{
            if(await bcrypt.compare(user.password, password) )
            {
                return (done, null, user);
            }
            else
            {
                return (done, false, { message: "Invalid Password"});
            }

        }catch(e){
            return done( e );
        }
    };

    passport.use(new LocalStrategy({usernameField: 'email'}), authenticateUser);

    passport.serializeUser((user, done) => { });
    passport.deserializeUser((id, done) => { });

}

module.exports = initialize;