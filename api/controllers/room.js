import Room from "../models/Rooms.js";
import Hotel from "../models/Hotels.js";

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

export const deleteRoom = async (req, res, next) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    await Hotel.findByIdAndUpdate(req.params.hotelId, {
      $pull: { rooms: req.params.id },
    });
    res.status(200).json("Room has been deleted!");
  } catch (err) {
    next(err);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

export const getAllRooms = async (req, res, next) => {
  try {
    const allRooms = await Room.find({});
    res.status(200).json(allRooms);
  } catch (err) {
    next(err);
  }
};
