// import uuid - creates unique unicode id 
import { v4 as uuidv4 } from 'uuid';

// mock db
let users = []

// CREATE user #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=
export const createUser = (req, res) => {
    // user = entire request body
    const user = req.body

    // userId = random Generated uuid
    // const userId = uuidv4();
    
    // spread operator to select all keys within the request body
    // then add extra key 'id' with the value of = userId 
    // const userWithId = { ...user, id: userId } 

    // push data to the request body
    // users.push(userWithId);

    // --- refactored code below ---
    // destructure object - updated the oject... then push data to empty array
    users.push({ ...user, id: uuidv4() });

    // response send message
    res.send(`Player: ${user.firstName} ${user.lastName} added to the matrix`)
}

// GET users #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=
export const getUsers = (req, res) => {
    // get all users from our mock DB
    // log users to the console
    console.log(users)
    // render users as JSON to the page 
    res.send(users)
}

// GET user by id #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=
export const getUserById = (req,res) => {
    // destructure request parameters and find id - store it as a constant variable
    const { id } = req.params

    // search our mock DB array to find a user that matches the request param id 
    const foundUser = users.find((user) => user.id === id)

    // render found user as JSON to the page
    res.send(foundUser)

    // note: currently their is no way to catch errors...
    // could implement try catch.
}

// DELETE user #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=
export const deleteUser = (req,res) => {
    // destructure request parameters and find id
    const { id } = req.params;
    
    // filter out all users whose id does not match the request parameters id 
    users = users.filter((user) => user.id != id)
     // this is set up as a DELETE request in our 'Routes file

     // render message to page as template string
    res.send(`Player: ${id} eliminated from the matrix`)
}

// UPDATE user #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=
export const updateUser = (req,res) => {
    // destructure the request parameters & request body
    // get the object keys & store each of their values constant variables 
    const { id } = req.params
    const { firstName, lastName, age } = req.body

    // search array (Database) and find our matched user in the DB & store that user as a contant variable 
    const user = users.find((user) => user.id === id)

    // if the firstName matches 
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`Player: ${id} Update Status:[COMPLETE]!`)
}