// import express...
import express from "express";
// uuid generates random endpoints in the URI
import { v4 as uuidv4 } from 'uuid';

// create Router
const router = express.Router();

// mock db
const users = [
    {
        firstName:"John",
        lastName:"Doe",
        age:"25"
    },
    {
        firstName:"Wa",
        lastName:"Wawewa",
        age:"23"
    }
]

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

// export this router
export default router