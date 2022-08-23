import "./oneHotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function OneHotel() {
    const photos = [
        {
            src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
    ];
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="one-hotel-container">
                <div className="one-hotel-wrapper">
                    <h1 className="one-hotel-title">Grand Hotel</h1>
                    <div className="one-hotel-address">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New York</span>
                    </div>
                    <span className="one-hotel-distance">
                        Excellent location - 500m from Center
                    </span>
                    <span className="one-hotel-price-highlight">
                        Book a stay over $114 at this property and get free
                        airport taxi
                    </span>
                    <div className="one-hotel-images">
                        {photos.map((photo) => (
                            <>
                                <div className="one-hotel-photo-wrapper">
                                    <img src={photo.src} atl="" />
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="one-hotel-details">
                        <div className="one-hotel-details-text">
                            <h1 className="one-hotel-title">
                                Stay in the heart of Krakow
                            </h1>
                            <p className="one-hotel-desc">
                                Dear lama, your project ideas, teaching, and
                                front end skills are incredible. You seem like a
                                front end dev at heart. I think you really shine
                                when you do React and Firebase/Firestore
                                projects. I know people keep asking you for
                                MERN, but from an engineering perspective it’s
                                not your strength and it’s just too much time to
                                build with SOLID principles and no spaghetti
                                code, so the controller ends up basically doing
                                everything. So I think React/Firebase would be a
                                good area to specialize.
                            </p>
                        </div>
                        <div className="one-hotel-details-price">
                            <h1>Perfect for a 9-night stay</h1>
                            <span>
                                Location in the real heart of Krakow, this
                                property has an excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reverse or Book Now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
