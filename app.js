const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users.js');
const posts = require('./routes/api/posts.js');
const profile = require('./routes/api/profile.js');

//DB Config
const db = require("./config/keys.js").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//==============//
//App config
//==============//
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
  //User routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
  //Passport middleware
app.use(passport.initialize());
require('./config/passport.js')(passport);

//Server port listening
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
