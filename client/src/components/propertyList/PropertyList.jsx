import "./propertyList.css";
import useFetch from "../../hooks/useFetch";

export default function PropertyList() {
    const { data, loading, error } = useFetch("/hotels/countByType");
    const images = [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ];
    return (
        <div className="property-list">
            {loading ? (
                "Loading please wait"
            ) : (
                <>
                    {data &&
                        images.map((img, i) => (
                            <div className="property-list-item" key={i}>
                                <img
                                    src={img}
                                    alt=""
                                    className="property-list-item-image"
                                />
                                <div className="property-list-title">
                                    <h1>{data[i]?.type}</h1>
                                    <h2>
                                        {data[i]?.count} {data[i]?.type}
                                    </h2>
                                </div>
                            </div>
                        ))}
                </>
            )}
        </div>
    );
}
