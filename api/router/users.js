import express from "express";
import {
  deleteUser,
  updateUser,
  getUser,
  getAllUsers,
} from "../controllers/user.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res) => {
  res.send("You are authenicated");
});

router.get("/checkuser/:id", verifyUser , (req, res) => {
  res.send("You can delete this account!!");
});

// UPDATE
router.put("/:id", updateUser);

// DELETE
router.delete("/:id", deleteUser);
// GET
router.get("/:id", getUser);
// GET ALL
router.get("/", getAllUsers);

export default router;
