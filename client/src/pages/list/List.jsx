import "./list.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItems from "../../components/SearchItems/SearchItems";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import useFetch from "../../hooks/useFetch";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function List() {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [dates, setDates] = useState(location.state.dates);
    const [options, setOptions] = useState(location.state.options);
    const [openDate, setOpenDate] = useState(false);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);

    const { data, loading, error, reFetch } = useFetch(
        `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
    );

    const handleSearch = () => {
        reFetch();
    };
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
                                // onChange={(e) => setDestination}
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
                                dates[0].startDate,
                                "MM/dd/yyyy"
                            )} to ${format(
                                dates[0].endDate,
                                "MM/dd/yyyy"
                            )}`}</span>
                            {openDate && (
                                <DateRange
                                    onChange={(item) =>
                                        setDates([item.selection])
                                    }
                                    ranges={dates}
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
                                        onChange={(e) => setMin(e.target.value)}
                                    />
                                </div>
                                <div className="list-search-option-item">
                                    <span className="list-search-option-text">
                                        Max price <small> per night </small>
                                    </span>
                                    <input
                                        type="number"
                                        className="list-search-option-input"
                                        min="0"
                                        onChange={(e) => setMax(e.target.value)}
                                    ></input>
                                </div>
                                <div className="list-search-option-item">
                                    <span className="list-search-option-text">
                                        Adult
                                    </span>
                                    <input
                                        placeholder={options.adults}
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
                                        placeholder={options.children}
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
                                        placeholder={options.room}
                                        type="number"
                                        className="list-search-option-input"
                                        min="1"
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <button onClick={handleSearch}>Search</button>
                    </div>
                    <div className="list-result">
                        {loading ? (
                            "loading"
                        ) : (
                            <>
                                {data.map((item) => (
                                    <SearchItems key={item._id} item={item} />
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
