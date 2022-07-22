import express from "express";
import {
  deleteUser,
  updateUser,
  getUser,
  getAllUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res) => {
//   res.send("You are authenicated");
// });

// router.get("/checkuser/:id", verifyUser, (req, res) => {
//   res.send("You can delete this account!!");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res) => {
//   res.send("You are an admin");
// });

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);
// GET
router.get("/:id", verifyUser, getUser);
// GET ALL
router.get("/", verifyAdmin, getAllUsers);

export default router;
