import express from "express";
import { createUser } from "../controllers/users.js";
import { getUsers } from "../controllers/users.js";
import { getUser } from "../controllers/users.js";
import { deleteUser } from "../controllers/users.js";
import { updateUser } from "../controllers/users.js";
//initialize our router
const router = express.Router();


router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
