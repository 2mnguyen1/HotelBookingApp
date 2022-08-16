import React from "react";

export default function SearchItems() {
    return (
        <div className="search-items">
            <img
                src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
                className="search-items-image"
            />
            <div className="search-items-desc">
                <h1 className="search-items-title">Tower Street Apartments</h1>
                <span className="search-items-distance">500m from center</span>
                <span className="search-items-taxiOp">Free airport taxi</span>
                <span className="search-items-subtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="search-items-features">
                    Entire Studio * 1 bathroom * 21m^2 1 full bed
                </span>
                <span className="search-items-cancelOp">Free cancellation</span>
                <span className="search-items-cancelOp-subtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="search-items-details">details</div>
        </div>
    );
}
