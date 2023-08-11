import React, {useState} from "react"
import '../style.css';
import parks from "./ParkList";
import Park from "./Park";

export default function List() {
    const [sortBy, setSortBy] = useState('name');

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const sortedParks = [...parks].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'distance') {
            return a.distance - b.distance; // Sort by least distance
        }
    });

    return (
        <div>
            <div>
                Sort by:{" "}
                <select value={sortBy} onChange={handleSortChange}>
                    <option value="name">Name</option>
                    <option value="distance">Distance from UWB</option>
                </select>
            </div>
            <ul>
                {sortedParks.map((park, index) => (
                    <li key={index}>
                        <h2>{park.name}</h2>
                        <p>{/* Park description here */}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}