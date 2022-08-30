import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Navbar() {
    const { user, loading, dispatch } = useContext(AuthContext);
    const handleSignOut = (event) => {
        event.preventDefault();
        dispatch({ type: "LOGOUT" });
    };
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
                    <div>
                        <span className="nav-username">{user.username}</span>
                        <button
                            className="nav-button"
                            disabled={loading}
                            onClick={handleSignOut}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="nav-items">
                        <button className="nav-button">Register</button>
                        <Link to="/login">
                            <button className="nav-button">Login</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
