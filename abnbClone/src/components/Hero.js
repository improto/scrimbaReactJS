import React from "react"
import photogrid from "../images/photo-grid.png"

export default function Hero(){
    return(
        <section className="hero">
            <img src={photogrid} className="hero--photogrid" alt="" />
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts. All without leaving home.</p>
        </section>
    )
}