import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";

import { useState, useContext } from "react";

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

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) => {
            getDatesInRange().includes(new Date(date).getTime());
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
    const handleReserve = () => {};
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
                    <div className="reserve-item">
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
                            <div className="reserve-price">{item.price}</div>
                        </div>
                        {item.roomNumbers.map((roomNumber) => (
                            <div className="room">
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
                ))}
                <button className="reserve-button" onClick={handleReserve}>
                    Reserve Now!
                </button>
            </div>
        </div>
    );
}
