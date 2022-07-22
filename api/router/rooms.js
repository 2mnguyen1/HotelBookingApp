import express from "express";
import {
  createRoom,
  deleteRoom,
  updateRoom,
  getRoom,
  getAllRooms,
} from "../controllers/Room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// CREATE
router.post("/:hotelId", verifyAdmin, createRoom);
// UPDATE
router.put("/:id", verifyAdmin, updateRoom);

// DELETE
router.delete("/:id", verifyAdmin, deleteRoom);
// GET
router.get("/:id", getRoom);
// GET ALL
router.get("/", getAllRooms);

export default router;
