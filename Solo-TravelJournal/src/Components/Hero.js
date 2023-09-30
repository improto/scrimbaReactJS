import React from "react"

export default function Hero(props){
    return(
        <div className="hero--container">
            <div className="card--main">
                <img src={props.item.imageUrl} alt="Japan img" className="card--img" />
                <div className="card--data">
                    <div className="card--extra-info">
                        <i class="fa fa-map-marker" id="map-marker" aria-hidden="true" />
                        <p className="card-country">{props.item.location}</p>
                        <a href={props.item.googleMapsUrl} target="_blank" className="card-maps">View on google maps</a>
                    </div>
                    <p className="card-place">{props.item.title}</p>
                    <p className="card-dates">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="card-desc">{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}