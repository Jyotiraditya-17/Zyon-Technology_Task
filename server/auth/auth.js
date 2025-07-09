const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');

passport.use(
    new googleStrategy({
        clientID : process.env.GOOGLE_CLIENT_ID,
        clientSecret : process.env.GOOGLE_CLIENT_SECRET,
        callbackURL : process.env.GOOGLE_REDIRECT_URL,
    },
    async (accessToken , refreshToken , profile , done) => {
        const user = {
            name : profile.displayName ,
            email : profile.emails[0].value,
            image : profile.photos[0].value,
        };

        const token = jwt.sign(user , process.env.JWT_SECRET , {expiresIn:'1h'});
        user.token = token;
        done(null , user);
    }
)
);

passport.serializeUser((user,done) => {
    done(null, user);
});

passport.deserializeUser((user,done) => {
    done(null, user);
});
