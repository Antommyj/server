const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID = require('../config/keys').googleClientID;
const GOOGLE_CLIENT_SECRET = require('../config/keys').googleClientSecret;

const mongoose = require('mongoose'); // You don't want to swap the order of these 2
const User = mongoose.model('users'); // The mongoose model needs the mongoose librarey pre-declared

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);

});

// Google strategy needs 2 parameter:
//  1. an object containing ClientID, clientSecret, and callbackURL
//  2. a function that takes accessToken as a parameter
passport.use(new GoogleStrategy(
        // First parameter
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        // Second Parameter
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId : profile.id});

            if(existingUser){
                // we already have a record with a given profile ID
                // The first argument is an error message. If we don't found "existingUser" we can pass it in here
                // The second argument is the user record
                done(null, existingUser);
            }else{
                // We don't hav user with this ID, make a new record
                const user = await new User ({ googleId: profile.id }).save(); // save() returns a promise (Asynchronous) that we can chain for .then or .catch
                done(null, user)
            }
        }
    )
);