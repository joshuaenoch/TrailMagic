import React from "react"
import '../style.css';
import restaurants from './Restaurants.js';

export default function Food() {
    return (
        <div>
            <ul>
                {restaurants.map((restaurant, index) => (
                <li key={index} style={{ marginTop: "50px", marginLeft: "50px" }}>
                    <h2>{restaurant.name}</h2>
                    <p>{restaurant.description}</p>
                </li>
                ))};
            </ul>
        </div>
    )
}