import "./searchItems.css";
import { Link } from "react-router-dom";
export default function SearchItems({ item }) {
    return (
        <div className="search-items">
            <img src={item.photos[0]} alt="" className="search-items-image" />
            <div className="search-items-desc">
                <h1 className="search-items-title">{item.name}</h1>
                <span className="search-items-distance">
                    {item.distance}m from center
                </span>
                <span className="search-items-taxiOp">Free airport taxi</span>
                <span className="search-items-subtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="search-items-features">
                    {item.description}
                </span>
                <span className="search-items-cancelOp">Free cancellation</span>
                <span className="search-items-cancelOp-subtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="search-items-details">
                {item.rating && (
                    <div className="search-items-rating">
                        <span>Exellent</span>
                        <button>{item.rating}</button>
                    </div>
                )}
                <div className="search-items-details-text">
                    <span className="search-items-price">
                        ${item.cheapestPrice}
                    </span>
                    <span className="search-items-taxOp">
                        Included taxes and fees
                    </span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className="search-items-check-button">
                            See availablity
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
