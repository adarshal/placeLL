const express = require('express');
const app = express();
const port = 8000 || process.env.PORT;

const cookieParser=require('cookie-parser');

// connect to db
const db=require('./config/mongoose');

// used for session cookie
const session= require('express-session');
const passport = require('passport');
const passportLocal= require('./config/passport-local-stratergy');
const passportJWT= require('./config/passport-jwt-stratergy');
const passportGoogle= require('./config/passport-google-OAuth-stratergy');
const MongoStore=require('connect-mongo')(session); //new mongostore dont require input session so downgraded from version 4 to 3

const flash = require('connect-flash');
const customMware= require('./config/middleware');


//using layouts !! it should be before routes
const expressLayout = require('express-ejs-layouts');
app.use(expressLayout);

// extract style and scripts from sub pages into the layout //it puts style inside head and script at end where <%- style or script tag is used
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// static files access 
app.use(express.static('assets'));
// make the uploads path available for browser
app.use('/uploads',express.static(__dirname+'/uploads'));




app.use(express.urlencoded({ extended: true }));  // need for parsing it is middleware
app.use(cookieParser()); 


//ejs set up view engine 
app.set('view engine', 'ejs');
app.set('views', './views');


//mongo store is used store cookie in db
app.use(session(
    {
    name: 'codeial',
    //TODO change secret before deploy in prod
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        maxAge: (1000 * 60 * 100) // it stores in ms this is 1000 min.
     },
     store: new MongoStore(
        {
            mongooseConnection: db,
            autoRemove: 'disabled'
        
        },
        function(err){
            console.log(err ||  'connect-mongodb setup ok');
        }
    )
}));


app.use(passport.initialize());
app.use(passport.session()); // paspport also have session function
app.use(passport.setAuthenticatedUser) // checks whether session cookies present
app.use(flash()); //flash should be after session creation
app.use(customMware.setFlash); 


//uses router this router need to be used after passport so rotes can use paaport
app.use('/', require('./routes')); // /router.index.js can also used bu ir directly fect index so used it


app.listen(port, function (err) {
    if (err) {
        console.log(`Error in starting server : ${err}`);
    }
    console.log(`Server started and running on ${port}`);
})