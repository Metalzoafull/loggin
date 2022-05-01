const flash = require("connect-flash");
const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const passport = require("passport");
const path = require("path");

const apiRoutes = require('./routes/apiRoutes');

//
const app = express();
require(path.join(__dirname, 'config', 'database'))
require(path.join(__dirname, 'passport', 'local-auth'));


//
app.set('port', process.env.PORT || 3000);


//
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({
    secret: 'pelada',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) =>{
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.signupMessage = req.flash('signupMessage');
    //app.locals.user = req.user;
    //console.log(app.locals)
    next();
});


//io config



//routes
app.use('/',apiRoutes);


//
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
});