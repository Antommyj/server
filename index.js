const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./model/users'); // You need to first define the user model before you can use it
require('./services/passport'); // This will throw in an error if you forgot to define the user model

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.web.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require("./routes/myMain")(app);


app.get('/', (req, res) => {

    res.send('This is the main pages')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

