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
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid email profile'
}, function( accessToken, refreshToken, extraParams, profile, done ) {
    const db = app.get('db')
    console.log(profile)
    db.find_user(profile.id).then( user => {
        if( user[0] ) {
            console.log( 'old user!' )
            return done( null, user[0] )
        }
        else {
            console.log( 'new user!' )
            db.create_user([profile.id, profile.nickname, profile.picture])
                .then( user => {
                    return done( null, user )
                })
        }
    })
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

// DB ENDPOINTS

// MONSTER DASH ENDPOINTS
app.get(`/monstDashItems`, controller.getMonstDash);
app.post('/monstDashItems', controller.addToMonstDash);
app.put('/monstDashItems', controller.remFromMonstDash);

// SPELL DASH ENDPOINTS
app.get('/spellDashItems', controller.getSpellDash);
app.post('/spellDashItems', controller.addToSpellDash);
app.put('/spellDashItems', controller.remFromSpellDash);

// ARMOR DASH ENDPOINTS
app.get('/armorDashItems', controller.getArmorDash);
app.post('/armorDashItems', controller.addToArmorDash);
app.put('/armorDashItems', controller.remFromArmorDash);

// WEAPON DASH ENDPOINTS
app.get('/weaponDashItems', controller.getWeaponDash);
app.post('/weaponDashItems', controller.addToWeaponDash);
app.put('/weaponDashItems', controller.remFromWeaponDash);

// EQUIP DASH ENDPOINTS
app.get('/equipDashItems', controller.getEquipDash);
app.post('/equipDashItems', controller.addToEquipDash);
app.put('/equipDashItems', controller.remFromEquipDash);

// MOUNT DASH ENDPOINTS
app.get('/mountDashItems', controller.getMountDash);
app.post('/mountDashItems', controller.addToMountDash);
app.put('/mountDashItems', controller.remFromMountDash);


app.listen(port, () => console.log(`Listening on port ${port}`));