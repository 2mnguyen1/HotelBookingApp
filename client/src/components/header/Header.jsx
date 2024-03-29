import "./header.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
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
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
export default function Header({ type }) {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [openOption, setOpenOption] = useState(false);
    const [options, setOptions] = useState({
        adults: 0,
        children: 0,
        room: 0,
    });
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "+" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const { user } = useContext(AuthContext);
    const { dispatch } = useContext(SearchContext); // pass dispatch to any page that get information

    const navigate = useNavigate();
    const handleSearch = () => {
        dispatch({
            type: "NEW_SEARCH",
            payload: { destination, dates, options },
        }); // when ever we search, it will dispatch type of NEW_SEARCH, and we have to send payload to Initial State
        navigate("/hotels", { state: { destination, dates, options } });
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
                        {!user && (
                            <button className="header-button">
                                Sign in / Register
                            </button>
                        )}
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
                                    onChange={(e) =>
                                        setDestination(e.target.value)
                                    }
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
                                    {format(dates[0].startDate, "MM/dd/yyyy") +
                                        " to " +
                                        format(dates[0].endDate, "MM/dd/yyyy")}
                                </span>
                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) =>
                                            setDates([item.selection])
                                        }
                                        moveRangeOnFirstSelection={false}
                                        ranges={dates}
                                        className="date"
                                        minDate={new Date()}
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
                                    {`${options.adults} adult ${options.children} children ${options.room} room`}
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
                                                        options.adults <= 0
                                                            ? true
                                                            : false
                                                    }
                                                    style={{
                                                        backgroundColor:
                                                            options.adults <= 0
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
                                                    {options.adults}
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
                                                        options.children <= 0
                                                            ? true
                                                            : false
                                                    }
                                                    style={{
                                                        backgroundColor:
                                                            options.children <=
                                                            0
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
                                                    {options.children}
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
                                                        options.room <= 0
                                                            ? true
                                                            : false
                                                    }
                                                    style={{
                                                        backgroundColor:
                                                            options.room <= 0
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
                                                    {options.room}
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
                                <button
                                    className="header-button"
                                    onClick={handleSearch}
                                >
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
