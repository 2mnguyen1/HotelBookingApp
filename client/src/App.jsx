import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import OneHotel from "./pages/oneHotel/OneHotel";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/hotels" element={<List />}></Route>
                <Route path="/hotels/:id" element={<OneHotel />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
