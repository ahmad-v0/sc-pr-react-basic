import jumanjiLogo from "../assets/jumanjiLogo.pnj";
export default function Footer() {
    return <div className="footer w90rem dFlex spaceBetween mxAuto mt3rem">
        <div>
            <div className="w25 p1rem"><a href="#"><img src={jumanjiLogo} alt="Jumanji Logo" className="logo"/></a></div>
        </div>
        <div>
            <ul className="footerList">
                <li>Home</li>
                <li>Tour Plan</li>
                <li>Book a Guide</li>
                <li>Contact</li>
                <li>Plan & Pricing</li>
                <li>Join Us</li>
                <li>Map</li>
            </ul>
        </div>
        <div>
            <h3>Subscribe</h3>
            <div>
            <input type="email" name="email" className="" />
            <button type="submit">Send</button>
            </div>
            
        </div>
    </div>
}