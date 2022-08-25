import "./featuredProperty.css";
import useFetch from "../../hooks/useFetch";

export default function FeaturedProperty() {
    const { data, loading, error } = useFetch("/hotels?featured=true&limit=3");
    return (
        <div className="featured-property">
            {loading
                ? "Loading"
                : data.map((item) => (
                      <div className="featured-property-item" key={item._id}>
                          <img
                              src={
                                  item.photos[0]
                                      ? item.photos[0]
                                      : "https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                              }
                              alt=""
                              className="fp-item-image"
                          />
                          <span className="fp-name">{item.name}</span>
                          <span className="fp-city">{item.city}</span>
                          <span className="fp-cost">
                              Starting from ${item.cheapestPrice}
                          </span>
                          {item.rating && (
                              <div className="fp-rating">
                                  <button>{item.rating}</button>
                                  <span>Exellent</span>
                              </div>
                          )}
                      </div>
                  ))}
        </div>
    );
}
