const express = require('express');
const path = require('path')
const logger = require('./middleware/logger')

const app = express();

// //Init middleware
// app.use(logger);

//Body Parser to translate data from the post request



//Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));

const PORT =  process.env.PORT || 3000;// take note

app.listen(PORT, ()=> console.log(`Server Started on port ${PORT}`));

