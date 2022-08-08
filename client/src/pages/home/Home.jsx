import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Feature from "../../components/feature/Feature";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="home-container">
                <Feature />
            </div>
        </div>
    );
}
