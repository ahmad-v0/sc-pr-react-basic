

import Bravestone from '../assets/Bravestone.png';
import starHalf from '../assets/starHalf.svg';
import starFull from '../assets/starFull.svg';
export default function CommunitySpotlight({firstName, lastName}) {
    return <>
    <div className='communitySpotlightImg'>
        <img src={Bravestone} alt="Bravestone" />
    </div>
    <div className='communitySpotlightRating dFlex '>
    <img src={starFull} alt="Full Star" style={{width:20}}/>
    <img src={starFull} alt="Full Star" style={{width:20}}/>
    <img src={starFull} alt="Full Star" style={{width:20}}/>
    <img src={starFull} alt="Full Star" style={{width:20}}/>
    <img src={starHalf} alt="Half Star" style={{width:20}}/>
    </div>
    <p><span style={{fontWeight: 'bold', fontSize:20, color: 'green'}}>12345</span> joined with </p>
    {firstName && lastName && (<p>Welcome <b>{lastName}, {firstName}</b> to the community</p>)}
    </>
}