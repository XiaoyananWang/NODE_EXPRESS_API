import { v4 as uuid } from 'uuid';

let users = [];
//all routes in here are starting with /users
//i.e. /users/
export const createUser = (req, res) => {
    const user = req.body;
    //create the id when you create a new user
    //const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    //spread all the property from our current user and add the property of id
    //const userWithId = { ...user, id: userId };
    //users.push(userWithId);
    //to get rid of too many variable, we can just use
    users.push({ ...user, id: uuid() });
    res.send(`User with the first name ${user.firstName} added to the database!`);
  };

  export const getUsers = (req, res) => {
    res.send(users);
  }

  export const getUser = (req, res) => {
    //when you put : here, you are expecting anything after the users path
    // router.get("/:id", (req, res) => {
    //   res.send("THE GET ID ROUTE");
    // });
    ///users/2 => req.params {id:2}
    //const id = req.params.id;
    //or you can use destruction here, just take the id value from the req.params
    const { id } = req.params;
    //for each user, we are searching for if the user has id equals to the id
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
  }

  export const deleteUser = (req, res) => {
    const { id } = req.params;
    //for each user, whatever here returns is equal to true, it keeps that user in the array
    //users=users.filter((user)=>true)
    //but if it is false, then it removes it from the array
    //users=users.filter((user)=>false)
    //we want to keep all the users except the one whose id is equal to the id
    //id to delete 123
    //John 123
    //Jane 321
    users = users.filter((user) => user.id !== id);
    res.send(`User with id ${id} deleted from the database.`);
  }

  export const updateUser =  (req, res) => {
    const { id } = req.params;
    //we can take the firstName, lastName or age from req.body
    //because we send something from the PATCH request
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);
    //We can change these things with a simple check
    // if there is a firstName, then we are going to set the user's firstName to the updated one
    if (firstName) {
      user.firstName = firstName;
    }
    if (lastName) {
      user.lastName = lastName;
    }
    if (age) {
      user.age = age;
    }
    res.send(`User with the id ${id} has been updated.`);
  }