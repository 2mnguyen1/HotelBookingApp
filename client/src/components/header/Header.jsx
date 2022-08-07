import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed,
    faCalendarDay,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
    return (
        <div className="header">
            <div className="header-container">
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
                <h1 className="header-title">
                    A lifetime of discounts? It's Genius.
                </h1>
                <p className="header-discription">
                    Get rewarded for your travels - unlock instant savings of
                    10% or more with a free Minhbooking account
                </p>
                <button className="header-button">Sign in / Register</button>
                <div className="header-search">
                    <div className="header-search-items">
                        <FontAwesomeIcon icon={faBed} className="header-icon" />
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
                        />
                        <span className="header-search-text">date to date</span>
                    </div>
                    <div className="header-search-items">
                        <FontAwesomeIcon
                            icon={faPerson}
                            className="header-icon"
                        />
                        <span className="header-search-text">2 adults 2 children 1 room</span>
                    </div>
                    <div className="header-search-items">
                        <button className="header-button">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
