import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import "./reserve.css";

export default function Reserve({ setOpenReserve, hotelId }) {
    const [selectedRoom, setSelectedRoom] = useState([]);
    const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
    const { dates } = useContext(SearchContext);

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());

        let list = [];

        while (date <= end) {
            list.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }

        return list;
    };

    const navigate = useNavigate();

    const allDates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);
    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavaliableDates.some((date) => {
            return allDates.includes(new Date(date).getTime());
        });

        return !isFound;
    };

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRoom(
            checked
                ? [...selectedRoom, value]
                : selectedRoom.filter((item) => item !== value) // when unchecked filter any value === item
        );
    };
    const handleReserve = async () => {
        try {
            await Promise.all(
                selectedRoom.map((roomId) => {
                    const res = axios.put(`/rooms/availability/${roomId}`, {
                        dates: allDates,
                    });
                    return res.data;
                })
            );
            setOpenReserve(false);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="reserve">
            <div className="reserve-container">
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="reserve-close"
                    onClick={() => setOpenReserve(false)}
                />
                <span>Select you rooms: </span>
                {data.map((item) => (
                    <div className="reserve-item" key={item._id}>
                        <div className="reserve-item-info">
                            <div className="reserve-item-title">
                                {item.title}
                            </div>
                            <div className="reserve-desc">
                                Room's description
                            </div>
                            <div className="reserve-max">
                                Max people: <b>{item.maxPeople}</b>
                            </div>
                            <div className="reserve-price">${item.price}</div>
                        </div>
                        <div className="reserve-select-room">
                            {item.roomNumbers.map((roomNumber) => (
                                <div className="room" key={roomNumber._id}>
                                    <label>{roomNumber.number}</label>
                                    <input
                                        type="checkbox"
                                        value={roomNumber._id}
                                        onChange={handleSelect}
                                        disabled={!isAvailable(roomNumber)}
                                    ></input>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button className="reserve-button" onClick={handleReserve}>
                    Reserve Now!
                </button>
            </div>
        </div>
    );
}
