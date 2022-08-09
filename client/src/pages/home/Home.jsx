import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Feature from "../../components/feature/Feature";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperty from "../../components/featuredProperty/FeaturedProperty";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="home-container">
                <Feature />
                <h1 className="home-title">Browse by property type</h1>
                <PropertyList />
                <h1 className="home-title">Homes guests love</h1>
                <FeaturedProperty />
            </div>
        </div>
    );
}
