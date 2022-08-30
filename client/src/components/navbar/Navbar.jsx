import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Navbar() {
    const { user } = useContext(AuthContext);
    return (
        <div className="navbar">
            <div className="navbar-container">
                <Link
                    to="/"
                    style={{ color: "inherit", textDecoration: "none" }}
                >
                    <span className="logo">minhbooking</span>
                </Link>
                {user ? (
                    user.username
                ) : (
                    <div className="nav-items">
                        <button className="nav-button">Register</button>
                        <button className="nav-button">Login</button>
                    </div>
                )}
            </div>
        </div>
    );
}
