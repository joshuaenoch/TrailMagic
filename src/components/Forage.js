import React from "react"
import '../style.css';
//import plants from './PlantList';
//import { Carousel } from "react-responsive-carousel";

export default function Forage() {
    return (
      <div className = "forage-container">
        <div className = "forage-intro">
          <p>To see which plants can be foraged from what trail, check out the <a href="/list">Trails</a> page</p>
        </div>
        <div className = "forage">
          <iframe className = "forage-iframe"
            src={`https://docs.google.com/document/d/${'1dxmMAglPLiya88FfAD_nO33pzG50dkgRvc4nsfqPYFY/edit?usp=sharing'}/pub?embedded=true&rm=minimal`}
            title="Embedded Google Doc"
          />
        </div>
      </div>

    );

    /*return (
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
    );*/
}