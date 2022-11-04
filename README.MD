1. What is Express and Why use it
- Very fast, unpopinionated and minimalist web framwork for Node,js
esieer
us for both server rendered apps
light, fast free
full controll


2. Prerequisites
Need to learn:
Http statu Codes
JSON
High order array methods
arrow function



3. Basic Syntax
const express = require ('express)

const app = express();

app.get('/', (re))


4. Basic Route Handling
app.get('/',function(req, res){
    //Fecth from database
    // Load pages
    // Return Json
    // Full access to request & respone
})

5. Middleware Intro
are function that have access to the request and response object.

execute any code 
Make changes to the req/res object
end response cylce
Call the middleware in the stack

6. Installations and Setup


7. Creating Routes
const express = require('express')

const app = express();

app.get('/', (req, res) => {
   res.send('<h1>Hello World</h1>')
})

const PORT =  process.env.PORT || 3000;// take note

app.listen(PORT, ()=> console.log(`Server Started on port ${PORT}`));



8. nodemon
- You can edit your script in the package.json to use seperate script an run it with the name you want it
example:  "scripts": {
    "start": "node index",
    "dev":"nodemon index"
  },

- Devdependendcis:
npm i -D nodemon
npm run dev 


9. Rendering html




10. Static
You can create an static folder and help you don't need too much file


11. REST API
create your own api and view to see it in postman
'/api/members' very commom
res.json(members) turn into json data

12. Middleware example
const logger = (req, res, next) => {
    console.log('Hello');
    next();
}
syntax

bonus package: moment handling date and time api

13. Get Single Member
example of url parameter
app.get('/api/member/:id') 

The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

  const found =members.some(member=> member.id === parseInt(req.params.id)) 
  some method return true or fasle

14. - Express Router
A router object is an isolated instance of middleware and routes. You can think of it as a “mini-application,” capable only of performing middleware and routing functions. Every Express application has a built-in app router.


15. - Create Member
use post method and body parser to translate the data from the request


50:10 - Update Member
55:48 - Delete Member
57:54 - Rendering Templates using express-handlebars
1:07:00 - Forms

