import "./login.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Login() {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });
    const { loading, error, dispatch } = useContext(AuthContext);
    const handleChange = (e) => {
        setCredentials((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };
    const navigate = useNavigate();
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate('/')
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };
    return (
        <div className="login">
            <div className="login-container">
                <input
                    type="text"
                    className="login-input"
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    className="login-input"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                />
                <button disabled={loading} onClick={handleClick} className="login-btn">
                    Login
                </button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    );
}
