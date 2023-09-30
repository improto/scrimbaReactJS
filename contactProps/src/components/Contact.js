import React from "react"
import phone_ico from "../images/phone-icon.png"
import mail_ico from "../images/mail-icon.png"


export default function Contact(props){
    return(
        <div className="contact-card">
                <img src={props.img} alt="felix image"/>
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src={phone_ico} alt="phone icon"/>
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img src={mail_ico} alt="mail icon"/>
                    <p>{props.email}</p>
                </div>
            </div>
    )
}