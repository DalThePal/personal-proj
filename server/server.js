require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const port = process.env.SERVER_PORT || 3005;
const axios = require('axios');
const passport = require('passport');
const Auth0strategy = require('passport-auth0');
const controller = require('./controller');

const app = express();

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

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
app.use(express.static(`${__dirname}/../build`));

passport.use(new Auth0strategy({
    domain: process.env.DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid email profile'
}, function( accessToken, refreshToken, extraParams, profile, done ) {
    const db = app.get('db')
    db.find_user(profile.id).then( user => {
        if( user[0] ) {
            console.log( 'old user!' )
            return done( null, user[0] )
        }
        else {
            console.log( 'new user!' )
            db.create_user([profile.id, profile.nickname])
                .then( user => {
                    return done( null, user )
                }).catch((error) => {console.log('couldnt create user', error)})
        }
    }).catch((error) => console.log('user error:', error))
}));

passport.serializeUser((profile, done) => {
    done(null, profile);
});

passport.deserializeUser((profile, done) => {
    done(null, profile);
});

app.get('/login', passport.authenticate('auth0', {
    successRedirect: process.env.SUCCESS_REDIRECT,
    failureRedirect: process.env.FAILURE_REDIRECT,
}))

app.get('/auth/me', function (req, res) {
    if (req.session.passport) {
        return res.status(200).send(req.session.passport.user)
    }
    return res.status(500).send('No user found')
})

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect(process.env.FAILURE_REDIRECT);
})

// DASHBOARD ENDPOINTS

app.post('/dashItems', controller.addToDash);
app.get('/dashItems', controller.getDash)
app.delete(`/dashItems/:id`, controller.remFromDash);
app.post('/userDashItems', controller.addToUserDash);

// EQUIPMENT ENDPOINTS

app.post('/Equipment', controller.createEquip);
app.get('/Equipment', (req, res) => {
    console.log('got to getUserEquip')
    const dbInstance = req.app.get('db')
    dbInstance.get_user_equip(req.session.passport.user.id).then((userEquipment) => {
        res.status(200).send(userEquipment)
    }).catch(() => res.status(500).send('didnt get userEquipment'))
});
app.delete('/Equipment/:name', controller.remUserEquip);
app.put('/Equipment', controller.editUserEquip);

// MOUNTS ENDPOINTS

app.get('/Mounts', controller.getUserMount);
app.post('/Mounts', controller.createMount);
app.delete('/Mounts/:name', controller.remUserMount);
app.put('/Mounts', controller.editUserMount);

// ARMOR ENDPOINTS

app.get('/Armor', controller.getUserArmor);
app.post('/Armor', controller.createArm);
app.delete('/Armor/:name', controller.remUserArm);
app.put('/Armor', controller.editUserArm);
app.put('/ArmorDash', controller.userArmDash);


module.exports = app;

