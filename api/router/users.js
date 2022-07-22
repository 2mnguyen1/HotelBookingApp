import express from "express";
import {
  deleteUser,
  updateUser,
  getUser,
  getAllUsers,
} from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();


// UPDATE
router.put("/:id", updateUser);

// DELETE
router.delete("/:id", deleteUser);
// GET
router.get("/:id", getUser);
// GET ALL
router.get("/", getAllUsers);

export default router;
