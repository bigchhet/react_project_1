import React from "react"
import Card from "./components/Card.js"
import Navbar from "./components/Navbar.js"
import data from "./data.js"

export default function App(){
    const cards = data.map(item=> {
        return (
           <Card
                key = {item.id}
                item = {item}
           /> 
        )
    })
    
    return(
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
)}
