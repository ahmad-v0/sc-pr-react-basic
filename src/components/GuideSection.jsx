import Bravestone from '../assets/Bravestone.png';
import Ruby from '../assets/Ruby.png';
import Shelly from '../assets/Shelly.png';
import Mouse from '../assets/Mouse.png';
import GuideCard from "./GuideCard";

export default function GuideSection() {
    return <div className='guideSection w90rem mxAuto displayGrid'>
    <GuideCard guideName="Dr Smolder Bravestone"
    image={Bravestone}
    tagline="Archeologist & Explorer" 
    strength="Fearless, Climbing, Speed, Boomerang, Smoldering Intensity"
    weakness="None"/>
    <GuideCard guideName="Ruby Roundhouse"
    image={Ruby} 
    tagline="Commando"
    strength="Karate, Taekwondo, Dance fighting, Nunchucks"
    weakness="Venom"/>
    <GuideCard guideName="Professor Shelly Oberon"
    image={Shelly} 
    tagline="Cartographer & Paleontologist"
    strength="Cartography, Archeology, Linguistics"
    weakness="Endurance"/>
    <GuideCard guideName='Franklin "Mouse" Finbar'
    image={Mouse} 
    tagline="Zoologist & Weapons Valet"
    strength="Zoology, Weapons Handling, Backpack"
    weakness="Cake"/>
    </div>
}