import React from "react"
import './IdCard.css'

const  IdCard = ({ firstName, lastName, gender, height, birth, picture}) => {
    return(
        <div className="IdCard">
        <div><img src={picture} /></div>
        <div>
        <p>First name:{firstName}</p>
        <p>Last name:{lastName}</p>
        <p>Gender:{gender}</p>
        <p>Height:{height}</p>
        <p>Birth:{new Intl.DateTimeFormat('en-GB', {dateStyle:'full'}).format(birth)}</p>
        </div>
        </div>
    )
}

export default IdCard