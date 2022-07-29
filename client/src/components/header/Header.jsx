import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed,faCar,faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
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
                <h1 className="header-title">A lifetime of discounts? It's Genius.</h1>
                <p className="header-discription">
                    Get rewarded for your travels - unlock instant savings of 10% or more with a free Minhbooking account
                </p>
                <button className="header-button">Sign in / Register</button>
            </div>
        </div>
    );
}
