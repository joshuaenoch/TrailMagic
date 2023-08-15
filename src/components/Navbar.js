import React from "react";
import "../style.css"
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    const handleNavigateClick = (path) => {
        navigate(path);
    };
    return (

        <nav>
            <div className="navbar">
                <ul classnName="nav-items">
                    <li onClick={() => handleNavigateClick("/")}>
                        Map
                    </li>
                    <li onClick={() => handleNavigateClick("/list")}>
                        Trails
                    </li>
                    <li onClick={() => handleNavigateClick("/food")}>
                        Food
                    </li>
                    <li onClick={() => handleNavigateClick("/forage")}>
                        Foraging
                    </li>
                </ul>
            </div>
        </nav>


    );
}