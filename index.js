import express from "express";
//allows us to take in incoming post request bodies
import bodyParser from "body-parser";
//when we use default imports, we can name anything we like, i.e. usersRoutes
import usersRoutes from "./routes/users.js";

//initialize express application
const app = express();

//specify the port
const PORT = 5000;

//initialize the bodyparser middleware, we are going to be using json data in our whole application
app.use(bodyParser.json());

//set the starting paths for all the routes in the users.js file
//from the design, all routes start with /users, so we set this to be /users
//use(the starting path name, what is going to happen when people visit this path)
//In this case, when people visit /users, we are going to run the users routes
//usersRoutes are the routes we imported from the users.js
app.use("/users", usersRoutes);

//We can create different routes of different types.
//expecting a get request to the / or the Home Page
//get('path we are expecting that request to', callback function)
//callback (request,response)
app.get("/", (req, res) => {
  res.send("Hello from HomePage.");
});

//make our app listen for incoming requests,
//listen(port we want to listen on, a callback function which is going to be excuted once we run the server)
app.listen(PORT, () => {
  console.log(`Server Running on port: http://localhost:${PORT}`);
});
