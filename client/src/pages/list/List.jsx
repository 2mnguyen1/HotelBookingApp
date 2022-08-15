import "./list.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
export default function List() {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [option, setOption] = useState(location.state.option);
    const [openDate, setOpenDate] = useState(false);

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="list-container">
                <div className="list-wrapper">
                    <div className="list-search">
                        <h1 className="list-search-title">Search</h1>
                        <div className="list-search-item">
                            <label
                                for="list-search-input"
                                className="list-search-label"
                            >
                                Destination
                            </label>
                            <input
                                placeholder={destination}
                                id="list-search-input"
                                type="text"
                            ></input>
                        </div>
                        <div className="list-search-item">
                            <label
                                for="list-search-input"
                                className="list-search-label"
                                onClick={() => setOpenDate((prev) => !prev)}
                            >
                                Check-in date
                            </label>
                            <span
                                onClick={() => setOpenDate((prev) => !prev)}
                            >{` ${format(
                                date[0].startDate,
                                "MM/dd/yyyy"
                            )} to ${format(
                                date[0].endDate,
                                "MM/dd/yyyy"
                            )}`}</span>
                            {openDate && (
                                <DateRange
                                    onChange={(item) =>
                                        setDate([item.selection])
                                    }
                                    ranges={date}
                                    minDate={new Date()}
                                />
                            )}
                        </div>
                        <div className="list-search-item">
                            <label>Options</label>
                            <div className="list-search-option">
                                <div className="list-search-option-item">
                                    <span className="list-search-option-text">
                                        Min price <small> per night </small>
                                    </span>
                                    <input
                                        type="number"
                                        className="list-search-option-input"
                                        min="0"
                                    ></input>
                                </div>
                                <div className="list-search-option-item">
                                    <span className="list-search-option-text">
                                        Max price <small> per night </small>
                                    </span>
                                    <input
                                        type="number"
                                        className="list-search-option-input"
                                        min="0"
                                    ></input>
                                </div>
                                <div className="list-search-option-item">
                                    <span className="list-search-option-text">
                                        Adult
                                    </span>
                                    <input
                                        placeholder={option.adults}
                                        type="number"
                                        className="list-search-option-input"
                                        min="1"
                                    ></input>
                                </div>
                                <div className="list-search-option-item">
                                    <span className="list-search-option-text">
                                        Children
                                    </span>
                                    <input
                                        placeholder={option.children}
                                        type="number"
                                        className="list-search-option-input"
                                        min="0"
                                    ></input>
                                </div>
                                <div className="list-search-option-item">
                                    <span className="list-search-option-text">
                                        Room
                                    </span>
                                    <input
                                        placeholder={option.room}
                                        type="number"
                                        className="list-search-option-input"
                                        min="1"
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="list-result"></div>
                </div>
            </div>
        </div>
    );
}
