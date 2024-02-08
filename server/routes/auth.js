import express from "express";
import { register, login, reset, forgot } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgot", forgot);
router.post("/reset/:id/:token", reset);

export default router;
