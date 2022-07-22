import Room from "../models/Rooms.js";
import Hotel from "../models/Hotels.js";
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } });
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updateRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateRoom);
  } catch (err) {
    next(err);
  }
};
