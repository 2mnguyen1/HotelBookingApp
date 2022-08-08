import "./header.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed,
    faCalendarDay,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
export default function Header({ type }) {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [openOption, setOpenOption] = useState(false);
    const [option, setOption] = useState({
        adults: 0,
        children: 0,
        room: 0,
    });
    const handleOption = (name, operation) => {
        setOption((prev) => {
            return {
                ...prev,
                [name]: operation === "+" ? option[name] + 1 : option[name] - 1,
            };
        });
    };
    return (
        <div className="header">
            <div
                className={
                    type === "list"
                        ? "header-container header-list-mode"
                        : "header-container"
                }
            >
                <div className="header-lists">
                    <div className="header-list-item active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span>
                    </div>
                </div>
                {type !== "list" && (
                    <>
                        <h1 className="header-title">
                            A lifetime of discounts? It's Genius.
                        </h1>
                        <p className="header-discription">
                            Get rewarded for your travels - unlock instant
                            savings of 10% or more with a free Minhbooking
                            account
                        </p>
                        <button className="header-button">
                            Sign in / Register
                        </button>
                        <div className="header-search">
                            <div className="header-search-items">
                                <FontAwesomeIcon
                                    icon={faBed}
                                    className="header-icon"
                                />
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    className="header-search-input"
                                ></input>
                            </div>
                            <div className="header-search-items">
                                <FontAwesomeIcon
                                    icon={faCalendarDay}
                                    className="header-icon"
                                    onClick={() => setOpenDate((prev) => !prev)}
                                />
                                <span
                                    className="header-search-text"
                                    onClick={() => setOpenDate((prev) => !prev)}
                                >
                                    {format(date[0].startDate, "MM/dd/yyyy") +
                                        " to " +
                                        format(date[0].endDate, "MM/dd/yyyy")}
                                </span>
                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) =>
                                            setDate([item.selection])
                                        }
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className="date"
                                    />
                                )}
                            </div>
                            <div className="header-search-items">
                                <FontAwesomeIcon
                                    icon={faPerson}
                                    className="header-icon"
                                    onClick={() =>
                                        setOpenOption((prev) => !prev)
                                    }
                                />
                                <span
                                    className="header-search-text"
                                    onClick={() =>
                                        setOpenOption((prev) => !prev)
                                    }
                                >
                                    {`${option.adults} adult ${option.children} children ${option.room} room`}
                                </span>
                                {openOption && (
                                    <div className="options">
                                        <div className="option-item">
                                            <span className="option-text">
                                                Adult
                                            </span>
                                            <div className="option-counter">
                                                <button
                                                    disabled={
                                                        option.adults <= 0
                                                            ? true
                                                            : false
                                                    }
                                                    style={{
                                                        backgroundColor:
                                                            option.adults <= 0
                                                                ? "lightgrey"
                                                                : "",
                                                    }}
                                                    className="option-counter-button"
                                                    onClick={() =>
                                                        handleOption(
                                                            "adults",
                                                            "-"
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                                <span className="option-counter-number">
                                                    {option.adults}
                                                </span>
                                                <button
                                                    className="option-counter-button"
                                                    onClick={() =>
                                                        handleOption(
                                                            "adults",
                                                            "+"
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="option-item">
                                            <span className="option-text">
                                                Children
                                            </span>
                                            <div className="option-counter">
                                                <button
                                                    disabled={
                                                        option.children <= 0
                                                            ? true
                                                            : false
                                                    }
                                                    style={{
                                                        backgroundColor:
                                                            option.children <= 0
                                                                ? "lightgrey"
                                                                : "",
                                                    }}
                                                    className="option-counter-button"
                                                    onClick={() =>
                                                        handleOption(
                                                            "children",
                                                            "-"
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                                <span className="option-counter-number">
                                                    {option.children}
                                                </span>
                                                <button
                                                    className="option-counter-button"
                                                    onClick={() =>
                                                        handleOption(
                                                            "children",
                                                            "+"
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="option-item">
                                            <span className="option-text">
                                                Room
                                            </span>
                                            <div className="option-counter">
                                                <button
                                                    disabled={
                                                        option.room <= 0
                                                            ? true
                                                            : false
                                                    }
                                                    style={{
                                                        backgroundColor:
                                                            option.room <= 0
                                                                ? "lightgrey"
                                                                : "",
                                                    }}
                                                    className="option-counter-button"
                                                    onClick={() =>
                                                        handleOption(
                                                            "room",
                                                            "-"
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                                <span className="option-counter-number">
                                                    {option.room}
                                                </span>
                                                <button
                                                    className="option-counter-button"
                                                    onClick={() =>
                                                        handleOption(
                                                            "room",
                                                            "+"
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="header-search-items">
                                <button className="header-button">
                                    Search
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
