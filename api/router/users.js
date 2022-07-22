import express from "express";
import {
  deleteUser,
  updateUser,
  getUser,
  getAllUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res) => {
  res.send("You are authenicated");
});

router.get("/checkuser/:id", verifyUser, (req, res) => {
  res.send("You can delete this account!!");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res) => {
  res.send("You are an admin");
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
