import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Reserve({ setOpenReserve, hotelId }) {
    return (
        <div className="reserve">
            <div className="reserve-container">
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="reserve-close"
                    onClick={() => setOpenReserve(false)}
                />
                <span>Select you rooms: </span>
            </div>
        </div>
    );
}
