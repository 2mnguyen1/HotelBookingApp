import "./navbar.css"

export default function Navbar() {
  return (
      <div className="navbar">
          <div className="navbar-container">
              <span className="logo">minhbooking</span>
              <div className="nav-items">
                  <button className="nav-button">Register</button>
                  <button className="nav-button">Login</button>
              </div>
          </div>
      </div>
  );
}
