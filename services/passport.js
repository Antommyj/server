const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID = require('../config/keys').web.client_id;
const GOOGLE_CLIENT_SECRET = require('../config/keys').web.client_secret;

// Google strategy needs 2 parameter:
//  1. an object containing ClientID, clientSecret, and callbackURL
//  2. a function that takes accessToken as a parameter
passport.use(new GoogleStrategy(
    // First parameter
    {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    // Second Parameter
    (accessToken, refreshToken, profile, done) => {
        console.log("Access Token: " + accessToken);
        console.log("Refresh Token: " + refreshToken);
        console.log("Profile: " + profile);
        console.log("Done: " + done);

    }
    )
);