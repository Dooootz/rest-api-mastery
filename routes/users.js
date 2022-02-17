// import express...
import express from "express";
// uuid generates random endpoints in the URI
import { v4 as uuidv4 } from 'uuid';

// create Router
const router = express.Router();

// mock db
let users = []

// all routes here start with '/users'
router.get('/', (req, res) => {
    console.log(users)
    res.send(users)
})

// POST method on /users endpoint
router.post('/', (req, res) => {
    // user = entire request body
    const user = req.body

    // const userId = uuidv4();
    // const userWithId = { ...user, id: userId }
    // users.push(userWithId);
    // --- refactored code below ---
    users.push({ ...user, id: uuidv4() });

    // response send message
    res.send(`Player: ${user.firstName} ${user.lastName} added to the matrix`)
})


router.get('/:id', (req,res) => {
    // destructure request parameters and find id
    const { id } = req.params

    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser)
})

router.delete('/:id', (req,res) => {
    // destructure request parameters and find id
    const { id } = req.params;
    // filter thru DB and find our current user by id 
    // 
    users = users.filter((user) => user.id != id)

    res.send(`Player: ${id} eliminated from the matrix`)
})


// export this router
export default router