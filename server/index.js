const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config();

require('./auth/auth');

const app = express();
app.use(cors({
    origin : process.env.Client_URL ,
    credentials : true
}));

app.use(session({
    secret:"keyboard cat" , resave:false , saveUninitialized:true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

app.get('/auth/google' , passport.authenticate("google" , {
    scope : ['profile' , 'email']
}));

app.get('/auth/google/callback' , passport.authenticate("google",{
    failureRedirect : '/'
}) ,
(req,res) => {
    const token = req.user.token ;
    res.redirect(`${process.env.Client_URL}/auth-success?token=${token}`);
}
);

app.get("/api/user", (req, res) => {
    if (req.isAuthenticated()) {
        res.send(req.user);
    } else {
        res.status(401).send("Unauthorized");
    }
});

app.get("/logout", (req, res) => {
    req.logout(function(err) {
        if (err) { return res.status(500).send("Logout failed"); }
        req.session.destroy(() => {
            res.clearCookie('connect.sid');
            res.send({ message: "Logged out successfully" });
        });
    });
});



app.listen(5000 , () => {
    console.log(`server running on http://localhost:5000`);
});