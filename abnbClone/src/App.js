import React from "react"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import CardData from "./Data"
//import katie_img from "./images/katie-zaferes.png"

export default function App() {

    const showData = CardData.map(cData => {
        return <Card 
            key={cData.id}
            item={cData}
            />
    })

    return (
        <div className="main--app">
            <NavBar />
            <Hero />
            <section className="app--cards">
                {showData}
            </section>    
        </div>
    )
}
