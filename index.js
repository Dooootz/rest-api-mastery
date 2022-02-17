// import express & bodyParser
import express from 'express';
// bodyParser allows us to parse requests & response bodies as JSON
import bodyParser from 'body-parser';

// create express app = app
const app = express();
// instatiate PORT number
const PORT = 5000;

// use bodyParser to parse req & res bodies as JSON 
app.use(bodyParser.json());

// create route - we are expecting a GET request
// first parameter is the PATH or endpoint
// second parameter is a callback function that expects 2 parameters - req & res 
app.get('/', (req, res) => {
    console.log('[TEST]!')

    res.send('Hello from the matrix')
})

app.listen(PORT, () => {console.log(`ITS ALIVE!!! on http://localhost:${PORT}`)}) 