import React from "react"
import star from "../images/star.png"

export default function Card(props){

    let stickerText
    if (props.item.openSpots === 0){
        stickerText = "SOLD OUT"
    }else if (props.item.location === "Online"){
        stickerText = "Online"
    }

    return(
        <div className="card">

            {stickerText && <div className="card--sticker">{stickerText}</div>}

            <img src={props.item.coverImg} className="card--img" alt="Card-img" /><br />    
            <div className="card--stats">
                <img src={star} className="card--star" alt="star"/>     
                <span> {props.item.stats.rating}.0 </span>              
                <span className="toGray"> ({props.item.stats.reviewCount}).</span>  
                <span className="toGray">{props.item.location}</span>   
            </div>
            <p className="card--data">{props.item.title}</p>           
            <p className="card--price"><span className="toBold">From ${props.item.price}</span> / person</p>    
        </div>
    )
}