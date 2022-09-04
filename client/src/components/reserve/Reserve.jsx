import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";

import { useState } from "react";

export default function Reserve({ setOpenReserve, hotelId }) {
    const [selectedRoom, setSelectedRoom] = useState([]);
    const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);

    
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
                    <div className="room-item">
                        <div className="room-item-info">
                            <div className="room-item-title">{item.title}</div>
                            <div className="room-desc">Room's description</div>
                            <div className="room-max">
                                Max people: <b>{item.maxPeople}</b>
                            </div>
                            <div className="room-price">{item.price}</div>
                        </div>
                        {item.roomNumbers.map((roomNumber) => (
                            <div className="room">
                                <label>{roomNumber.number}</label>
                                <input
                                    type="checkbox"
                                    value={roomNumber._id}
                                    onChange={handleSelect}
                                ></input>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
