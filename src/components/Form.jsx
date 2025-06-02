import { useState } from "react";

export default function Form({sendPerson}) {

    const [person, setPerson] = useState(
        {
            firstName:'',
            lastName:'',
            email:'',
            message:''
        }
    );

    const [errors, setErrors] = useState(
        {
            firstName:'',
            lastName:'',
            email:''
        }
    )

    const updateData = (e) => {
        const {name, value} = e.target;
        
        setPerson(prev => ({
            ...prev,
            [name]: value
        })
        );
    }

    function data(e) {
        e.preventDefault();
        const newErrors = {
                firstName:'',
                lastName:'',
                email:''
            };
        ((!person.firstName || !isNaN(Number(person.firstName))) && (newErrors.firstName = "Invalid input!"));
        ((!person.lastName || !isNaN(Number(person.lastName))) && (newErrors.lastName = "Invalid input!"));
        (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(person.email) && (newErrors.email="Invalid email!"));
        setErrors(newErrors);
        if (Object.values(newErrors).every(e => e === "")) {
            sendPerson(person);
            setPerson({
                firstName:'',
                lastName:'',
                email:'',
                message:''
            });
            // setErrors(errors);
        };
        setTimeout(()=>{setErrors({
                firstName:'',
                lastName:'',
                email:''
            })}, 3000)
    };
    
    return<>
    <form className="dFlex flexC spaceBetween p1rem" onSubmit={data}>
        <div className="formInput fullName w100 displayGrid gridColumn2 gap1rem">
        <div className="formInputField dFlex flexC">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName0" value={person.firstName} onChange={updateData}/>
            {errors.firstName && <small className="inpError">{errors.firstName}</small>}
        </div>
        <div className="formInputField dFlex flexC">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName0" value={person.lastName} onChange={updateData}/>
            {errors.lastName && <small className="inpError">{errors.lastName}</small>}
        </div>
    </div>
    <div className="formInputField dFlex flexC">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email0" value={person.email} onChange={updateData}/>
        {errors.email && <small className="inpError">{errors.email}</small>}
    </div>
    
    <label htmlFor="message">Share Your Experience</label>
    <textarea name="message" id="message0" value={person.message} onChange={updateData}></textarea>
    <button type="submit" className="btnGuideCard btnGuideCardPrimary">Submit</button>
    </form>
    </>
}