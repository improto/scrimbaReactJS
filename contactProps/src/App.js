import React from "react"
import Contact from "./components/Contact"

import felix from "./images/felix.png"
import fluffykins from "./images/fluffykins.png"
import mrwhiskers from "./images/mrwhiskers.png"
import pumpkin from "./images/pumpkin.png"


export default function App() {
    return(
        <div className="contacts">
            <Contact 
                img={mrwhiskers} 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img={fluffykins}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img={felix}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img={pumpkin}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}