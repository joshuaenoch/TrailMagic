import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style.css";
import parks from "./ParkList";

export default function List() {
  const [sortBy, setSortBy] = useState("name");

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortedParks = [...parks].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "distance") {
      return a.distance - b.distance;
    }
    return 0;
  });

  return (
    <div className="list-container">
        <div className = "list">
            <div>
                Sort by:{" "}
                <select value={sortBy} onChange={handleSortChange}>
                <option value="name">Name</option>
                <option value="distance">Distance from UWB</option>
                </select>
            </div>
            <ul>
                {sortedParks.map((park, index) => (
                <li key={index} style={{ marginTop: "50px" }}>
                    <h2>{park.name}</h2>
                    <p>Distance from UW Bothell: {park.distance} miles</p>
                    <p>Difficulty: {park.difficulty}</p>
                    <div className="image-container">
                    {park.images && park.images.length > 0 && (
                        <Carousel showThumbs={false} showStatus={false}>
                        {park.images.map((image, imageIndex) => (
                            <div key={imageIndex}>
                            <img
                                src={image}
                                alt={`${imageIndex}`}
                                style={{maxHeight: "200px", width: "auto", display: "block", margin: "0 auto"}}
                            />
                            </div>
                        ))}
                        </Carousel>
                    )}
                    </div>
                </li>
                ))}
            </ul>
        </div>
    </div>
  );
}
