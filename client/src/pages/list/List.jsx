import "./list.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
export default function List() {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [option, setOption] = useState(location.state.option);
    

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
                            <input id="list-search-input" type="text"></input>
                        </div>
                        <div className="list-search-item">
                            <label
                                for="list-search-input"
                                className="list-search-label"
                            >
                                Check-in date
                            </label>
                            <input id="list-search-input" type="text"></input>
                        </div>
                    </div>
                    <div className="list-result"></div>
                </div>
            </div>
        </div>
    );
}
