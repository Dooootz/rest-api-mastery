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
    users.push({ ...user, id: uuidv4() });

    // response send message
    res.send(`Player: ${user.firstName} ${user.lastName} added to the matrix`)
}

// GET users #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=
export const getUser = (req, res) => {
    console.log(users)
    res.send(users)
}

// GET user by id #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=
export const getUserById = (req,res) => {
    // destructure request parameters and find id
    const { id } = req.params

    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser)
}

// DELETE user #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=
export const deleteUser = (req,res) => {
    // destructure request parameters and find id
    const { id } = req.params;
    // filter thru DB and find our current user by id 
    // 
    users = users.filter((user) => user.id != id)

    res.send(`Player: ${id} eliminated from the matrix`)
}

// UPDATE user #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=
export const updateUser = (req,res) => {
    const { id } = req.params
    const { firstName, lastName, age } = req.body

    const user = users.find((user) => user.id === id)

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`Player: ${id} Update Status:[COMPLETE]!`)
}