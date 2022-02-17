// import express...
import express from "express";
// uuid generates random endpoints in the URI


import { createUser, getUsers, getUserById, deleteUser, updateUser } from '../controllers/users.js'

// create Router
const router = express.Router();


// GET users endpoint ---------------------
router.get('/', getUsers)

// POST method on /users endpoint ---------------------
router.post('/', createUser)

// create route that GET's users by id --------------------- 
router.get('/:id', getUserById)

// create route that DELETE's user by id ---------------------
router.delete('/:id', deleteUser)

// create route that PATCH / UPDATE's user by id ---------------------
router.patch('/:id', updateUser)


// export this router
export default router