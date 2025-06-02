
import { useState } from "react";
import CommunitySpotlight from "./CommunitySpotlight";
import Form from './Form';

export default function CommunitySection() {
    const [person, setPerson] = useState({firstName:'', lastName:''});

    return <div className="communitySection w90rem mxAuto p3rem ">
        <div className="w50 mxAuto dFlex gap1rem">
        <div>
            <Form sendPerson={setPerson}/>
        </div>
        <div>
            <CommunitySpotlight firstName={person.firstName} lastName={person.lastName}/>
        </div>
        </div>
        
    </div>
}