import React, {useState} from "react"
import '../style.css';
import parks from "./ParkList";

export default function List() {
    const [sortBy, setSortBy] = useState('name');

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const sortedParks = [...parks].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'distance') {
            return a.distance - b.distance;
        }
        return 0;
    });

    return (
        <div className = "list-container">
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
                    <p>Distance from UW Bothell: {park.distance} miles</p>
                    <p>Difficulty: {park.difficulty}</p>
                    <div className="image-container">
                        {park.images && park.images.length > 0 && (
                            park.images.map((image, imageIndex) => (
                                <img
                                    key={imageIndex}
                                    src={image}
                                    alt={`${imageIndex}`}
                                    style={{ height: '200px' }} // Set the fixed height here
                                />
                            ))
                        )}
                    </div>
                </li>
            ))}
            </ul>
        </div>
    );
}