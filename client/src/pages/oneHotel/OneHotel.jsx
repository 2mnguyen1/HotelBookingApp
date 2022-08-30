import "./oneHotel.css";
import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import Reverse from "../../components/reserve/Reserve";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

export default function OneHotel() {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const [openReserve, setOpenReserve] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.pathname.split("/")[2];

    const { data, loading, error } = useFetch(`/hotels/find/${id}`);

    const { user } = useContext(AuthContext);
    const { dates, options } = useContext(SearchContext);

    const daysDifference = () => {
        const timeDiff =
            dates[0]?.endDate.getTime() - dates[0]?.startDate.getTime();
        const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
        return daysDiff ? daysDiff : 1;
    };

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
    const handleReserve = () => {
        !user && navigate("/login");
        setOpenReserve(true);
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
                        <button onClick={handleReserve} className="btn-bookNow">
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
                            {photos?.map(
                                (
                                    photo,
                                    index // change to data after uploading photo
                                ) => (
                                    <div
                                        className="one-hotel-photo-wrapper"
                                        key={index}
                                    >
                                        <img
                                            onClick={() => handleOpen(index)}
                                            src={photo.src}
                                            atl=""
                                        />
                                    </div>
                                )
                            )}
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
                                <h1>
                                    Perfect for a {daysDifference()}-night stay
                                </h1>
                                {data.rating && (
                                    <span>
                                        Location in the real heart of Krakow,
                                        this property has an excellent location
                                        score of
                                        {data.rating}!
                                    </span>
                                )}
                                <h2>
                                    <b>
                                        $
                                        {data.cheapestPrice *
                                        daysDifference() *
                                        options.room
                                            ? options.room
                                            : 1}
                                    </b>{" "}
                                    ({daysDifference()}-night)
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
            {openReserve && (
                <Reverse setOpenReserve={setOpenReserve} hotelId={id} />
            )}
        </div>
    );
}
