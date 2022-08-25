import "./navbar.css";
import { Link} from "react-router-dom"
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
                    <span className="logo">minhbooking</span>
                </Link>
                <div className="nav-items">
                    <button className="nav-button">Register</button>
                    <button className="nav-button">Login</button>
                </div>
            </div>
        </div>
    );
}
