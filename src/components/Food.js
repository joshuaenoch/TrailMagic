import React, { useState } from "react";
import '../style.css';
import restaurants from './Restaurants.js';

export default function Food() {
    const [selectedType, setSelectedType] = useState("all");

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const filteredRestaurants = selectedType === "all"
        ? restaurants
        : restaurants.filter(restaurant => restaurant.type === selectedType);

    return (
      <div className = "food-container">
        <div className = "food">
            <div style={{textAlign: 'center'}}>
                <p>Here you can find a list of places to get food in Bothell! For a more specific list based on hike location, check out the Trails page.</p>
                Filter: &nbsp;
                <select value={selectedType} onChange={handleTypeChange}>
                    <option value="all">All</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="fast food">Fast Food</option>
                    <option value="store">Store</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <ul>
                {filteredRestaurants.map((restaurant, index) => (
                    <li key={index} style={{ marginTop: "50px"}}>
                        <h2>{restaurant.name}</h2>
                        <p>{restaurant.description}</p>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    )
}
