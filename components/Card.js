import React from "react"

export default function Card(props){
    return(
        <div className="card">
            <img src = {props.item.imageUrl} className="card--img"></img>
            <div className="card--contents">
                <h5 className = "card--location">{props.item.location}</h5>
                <h1 className = "card--title">{props.item.title}</h1>
                <h6 className = "card--dates">{props.item.startDate} - {props.item.endDate}</h6>
                <h6 className = "card--description">{props.item.description}</h6>
            </div>
        </div>
        
    )
}