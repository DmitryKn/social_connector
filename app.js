const express = require('express');
const app = express();
const mongoose = require('mongoose');

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

//User routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.get('/', (req, res) => {
  res.send("Hello");
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
