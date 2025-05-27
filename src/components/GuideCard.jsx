export default function guideCard(props) {
    return <div className="guideCard p1rem">
        <img src={props.image} alt={props.guideName} className="guideCardImg" />
        <p className="guideName fs1-5rem fw700">{props.guideName}</p>
        <p className="fw700">{props.tagline}</p>
        <p className="guideStrength"><span className="fw700">Strength: </span>{props.strength}</p>
        <p className="guideWeakness"><span className="fw700">Weakness: </span>{props.weakness}</p>
        <a href="#" className="btnGuideCard btnGuideCardPrimary">Join Team</a>
        <a href="#" className="btnGuideCard btnGuideCardSecondary">Check Profile</a>
    </div>
}