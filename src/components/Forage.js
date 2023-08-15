import React from "react"
import '../style.css';
import plants from './PlantList';
import { Carousel } from "react-responsive-carousel";

export default function Forage() {
    return (
        <div className = "forage">
          <ul>
                {plants.map((plant, index) => (
                <li key={index} style={{ marginTop: "50px" }}>
                    <h2>{plant.name}</h2>
                    <p>Description: {plant.description}</p>
                    <div className="image-container">
                    {plant.images && plant.images.length > 0 && (
                        <Carousel showThumbs={false} showStatus={false}>
                        {plant.images.map((image, imageIndex) => (
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
    );
}