// import express & bodyParser
import express from 'express';
// bodyParser allows us to parse requests & response bodies as JSON
import bodyParser from 'body-parser';
// imports pre set from route folder 
import usersRoutes from './routes/users.js'

// initialize express app = app
const app = express();
// instantiate PORT number
const PORT = 5000;

// use bodyParser to parse req & res bodies as JSON 
app.use(bodyParser.json());

// create /users endpoint & takes a callback function which is handles in the controller 
app.use('/users', usersRoutes)

// create '/' home enpdpoint - we are expecting a GET request
// first parameter is the PATH or endpoint [ home ]
// second parameter is a callback function that expects 2 parameters - req & res 
app.get('/', (req, res) => {
    console.log('[TEST]!')
    // send message
    res.send('Hello from the matrix')
})

// listen on PORT... then 
// callback function which prints URL to console 
app.listen(PORT, () => {console.log(`ITS ALIVE!!! on http://localhost:${PORT}`)}) 