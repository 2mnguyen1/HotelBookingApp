import "./mailList.css";

export default function MailList() {
    return (
        <div className="mail-list">
            <h1 className="mail-title">Save time, save monmey!</h1>
            <p className="mail-discription">Sign up and we'll send the best deals to you</p>
            <div className="mail-input-container">
                <input type="text" placeholder="Your email" />
                <button>Subcribe</button>
            </div>
        </div>
    );
}
