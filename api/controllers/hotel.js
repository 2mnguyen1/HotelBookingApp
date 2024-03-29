import Hotel from "../models/Hotels.js";
import Room from "../models/Rooms.js";


export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (err) {
        next(err);
    }
};

export const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedHotel);
    } catch (err) {
        next(err);
    }
};

export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json("Hotel has been deleted");
    } catch (err) {
        next(err);
    }
};

export const getHotel = async (req, res, next) => {
    try {
        const foundHotel = await Hotel.findById({ _id: req.params.id });
        res.status(200).json(foundHotel);
    } catch (err) {
        next(err);
    }
};

export const getAllHotels = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        const allHotels = await Hotel.find({
            ...others,
            cheapestPrice: { $gte: min || 1, $lte: max || 999 },
        }).limit(req.query.limit);
        res.status(200).json(allHotels);
    } catch (err) {
        next(err);
    }
};

export const countbyCity = async (req, res, next) => {
    const str = req.query.cities;
    const cities = str.split(",");
    try {
        const list = await Promise.all(
            cities.map((city) => {
                return Hotel.countDocuments({ city: city }); // list is an array [], countDocuments will count the number of hotel
            })
        );
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
};

export const countByType = async (req, res, next) => {
    try {
        const hotelCount = await Hotel.countDocuments({ type: "hotel" });
        const apartmentCount = await Hotel.countDocuments({
            type: "apartment",
        });
        const resortCount = await Hotel.countDocuments({ type: "resort" });
        const villaCount = await Hotel.countDocuments({ type: "villa" });
        const cabinCount = await Hotel.countDocuments({ type: "cabin" });

        res.status(200).json([
            {
                type: "hotel",
                count: hotelCount,
            },
            {
                type: "apartment",
                count: apartmentCount,
            },
            {
                type: "resort",
                count: resortCount,
            },
            {
                type: "villa",
                count: villaCount,
            },
            {
                type: "cabin",
                count: cabinCount,
            },
        ]);
    } catch (err) {
        next(err);
    }
};

export const getHotelRooms = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        const roomList = await Promise.all(
            hotel.rooms.map((room) => {
                return Room.findById(room);
            })
        );
        res.status(200).json(roomList);
    } catch (err) {
        next(err);
    }
};
