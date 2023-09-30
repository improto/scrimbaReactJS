import React from "react"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import cardData from "./Components/Data"

export default function App(){

    const showData = cardData.map(item => {
        return <Hero 
            key={item.title}
            item={item}
        />
    })

    return(
        <div className="appMain">
            <Header />
            {showData}
        </div>
        
    )
}