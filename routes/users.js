// import express...
import express from "express";
// uuid generates random endpoints in the URI

// import functions from controllers file 
import { createUser, getUsers, getUserById, deleteUser, updateUser } from '../controllers/users.js'

// Initialize Router
const router = express.Router();

// GET users endpoint ---------------------
// callback function is handled in the controllers file
router.get('/', getUsers)

// POST method on /users endpoint ---------------------
// callback function is handled in the controllers file
router.post('/', createUser)

// create route that GET's users by id --------------------- 
// callback function is handled in the controllers file
router.get('/:id', getUserById)

// create route that DELETE's user by id ---------------------
// callback function is handled in the controllers file
router.delete('/:id', deleteUser)

// create route that PATCH / UPDATE's user by id ---------------------
// callback function is handled in the controllers file
router.patch('/:id', updateUser)


// export our routes
export default router