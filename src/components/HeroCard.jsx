import ButtonWrapper from './ButtonWrapper'
import Button from './Button'

function HeroCard() {
    return <div className="heroCard w50 myAuto justifySelfCenter p3rem">
        <h2>
            Are you a Travel Enthusiast?
        </h2>
        <h1>
            Adventure Awaits with JUMANJI!
        </h1>
        <p className='fs1-5rem'>
            Embark on unforgettable journeys to the world's most exotic 
            destinations. Whether you crave serene beaches, thrilling safaris, 
            or bustling cities—we’ve got you covered!
        </p>
        <div className='dFlex alignCenter flexC'>
            <p className="fw700">Explore Hidden Gems</p>
        <p className="fw700">Customized Travel Packages</p>
        <p className="fw700">Best Deals Guaranteed</p>
        </div>
        <ButtonWrapper />
    </div>
}

export default HeroCard