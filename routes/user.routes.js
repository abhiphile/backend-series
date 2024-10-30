// user.routes.js
import { Router } from "express";
import { signInUser, registerUser } from "../controllers/user.controller.js";

const router = Router();

router.post('/register', registerUser);
router.post('/signin', signInUser);

export default router;
