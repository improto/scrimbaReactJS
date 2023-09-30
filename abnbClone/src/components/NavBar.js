import React from "react"
import logo from "../images/airbnb-logo.png"

export default function NavBar(){
    return(
        <div className="navbar">
            <img src={logo} className="navbar--logo" alt="" />
        </div>
    )
}