import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    roomNumbers: [{ number: Number, unavaliableDates: [{ type: Date }] }],
  },
  { timestamps: true }
);

// [
//   {
//     number: 101,
//     unavaliableDates: [01.05.2022],
//   },
//   {
//     number: 102,
//     unavaliableDates: [01.05.2022],
//   },
//   {
//     number: 103,
//     unavaliableDates: [01.05.2022],
//   },
// ];

export default mongoose.model("Room", RoomSchema);
