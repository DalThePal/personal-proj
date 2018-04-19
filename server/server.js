require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const port = process.env.SERVER_PORT || 3005;
const axios = require('axios');
const passport = require('passport');
const Auth0strategy = require('passport-auth0')

const app = express();

const {
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
} = process.env;

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use( express.static( `${__dirname}/../build` ) );

passport.use(new Auth0strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid email profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
}));

passport.serializeUser( (profile, done) => {
    done(null, profile);
});

passport.deserializeUser( (profile, done) => {
    done(null, profile);
});

app.get('/login', passport.authenticate('auth0', {
    successRedirect: process.env.SUCCESS_REDIRECT,
    failureRedirect: process.env.FAILURE_REDIRECT,
}))

app.listen(port, () => console.log(`Listening on port ${port}`));