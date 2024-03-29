import "./feature.css";
import useFetch from "../../hooks/useFetch";

export default function Feature() {
    const { data, loading, error } = useFetch(
        "/hotels/countByCity?cities=berlin,london,saigon"
    );

    return (
        <div className="feature-container">
            {loading ? (
                "Loading plases wait..."
            ) : (
                <>
                    <div className="feature-item">
                        <img
                            src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt=""
                        />
                        <div className="feature-title">
                            <h1>Berlin</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>
                    <div className="feature-item">
                        <img
                            src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt=""
                        />
                        <div className="feature-title">
                            <h1>London</h1>
                            <h2>{data[1]} properties</h2>
                        </div>
                    </div>
                    <div className="feature-item">
                        <img
                            src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt=""
                        />
                        <div className="feature-title">
                            <h1>Saigon</h1>
                            <h2>{data[2]} properties</h2>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
