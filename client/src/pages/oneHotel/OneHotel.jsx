import "./oneHotel.css";
import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faLocation,
    faLocationDot,
    faCircleArrowLeft,
    faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
export default function OneHotel() {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const { data, loading, error } = useFetch(`/hotels/find/${id}`);

    const { dates } = useContext(SearchContext);
    console.log(dates)

    const photos = [
        {
            src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            src: "https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
        },
        {
            src: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        },
        {
            src: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            src: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        },
    ];

    const handleOpen = (index) => {
        setSlideNumber(index);
        setOpen(true);
    };
    const handleMove = (direction) => {
        let newSLideNumber;
        if (direction === "left") {
            newSLideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSLideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }
        setSlideNumber(newSLideNumber);
    };
    return (
        <div>
            <Navbar />
            <Header type="list" />
            {loading ? (
                "loading"
            ) : (
                <div className="one-hotel-container">
                    {open && (
                        <div className="one-hotel-slider">
                            <div className="slider-wrapper">
                                <FontAwesomeIcon
                                    icon={faCircleArrowLeft}
                                    className="arrow"
                                    onClick={() => handleMove("left")}
                                />
                                <FontAwesomeIcon
                                    icon={faCircleXmark}
                                    className="close"
                                    onClick={() => setOpen(false)}
                                />
                                <img
                                    src={photos[slideNumber]?.src}
                                    className="slider-images"
                                />
                                <FontAwesomeIcon
                                    icon={faCircleArrowRight}
                                    className="arrow"
                                    onClick={() => handleMove("right")}
                                />
                            </div>
                        </div>
                    )}
                    <div className="one-hotel-wrapper">
                        <button className="btn-bookNow">
                            Reserve or Book Now!
                        </button>
                        <h1 className="one-hotel-title">{data.name}</h1>
                        <div className="one-hotel-address">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>{data.address}</span>
                        </div>
                        <span className="one-hotel-distance">
                            Excellent location - {data.distance}m from Center
                        </span>
                        <span className="one-hotel-price-highlight">
                            Book a stay over ${data.cheapestPrice} at this
                            property and get free airport taxi
                        </span>
                        <div className="one-hotel-images">
                            {data.photos?.map((photo, index) => (
                                <div
                                    className="one-hotel-photo-wrapper"
                                    key={index}
                                >
                                    <img
                                        onClick={() => handleOpen(index)}
                                        src={photo}
                                        atl=""
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="one-hotel-details">
                            <div className="one-hotel-details-text">
                                <h1 className="one-hotel-title">
                                    {data.title}
                                </h1>
                                <p className="one-hotel-desc">
                                    {data.description}
                                </p>
                            </div>
                            <div className="one-hotel-details-price">
                                <h1>Perfect for a 9-night stay</h1>
                                {data.rating && (
                                    <span>
                                        Location in the real heart of Krakow,
                                        this property has an excellent location
                                        score of
                                        {data.rating}!
                                    </span>
                                )}
                                <h2>
                                    <b>${data.cheapestPrice * 9}</b> (9 nights)
                                </h2>
                                <button>Reverse or Book Now!</button>
                            </div>
                        </div>
                    </div>
                    {!open && (
                        <>
                            <MailList />
                            <Footer />
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
