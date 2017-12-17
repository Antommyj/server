const express = require('express');
require('./services/passport');


const app = express();

require('./routes/authRoutes')(app);
require("./routes/myMain")(app);


app.get('/', (req, res) => {
    res.send('This is the main pages')
});



const PORT = process.env.PORT || 5000;
app.listen(PORT);

