const express = require('express');
const path = require('path')
const logger = require('./middleware/logger')
const members = require('./Members');

const app = express();


// //Init middleware
// app.use(logger);


//Get ALl member
app.get('/api/members', (req,res) =>{
   res.json(members); 
});

//Get a single member

app.get('/api/members/:id', (req,res) =>{
   const found =members.some(member=> member.id === parseInt(req.params.id)) 

if (found){
    res.json(members.filter(member => member.id === parseInt(req.params.id) ))
} else{
   res.status(400).json({msg: `No member with the id of ${req.params.id}`}) 
}
 
})


//Set a static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT =  process.env.PORT || 3000;// take note

app.listen(PORT, ()=> console.log(`Server Started on port ${PORT}`));

