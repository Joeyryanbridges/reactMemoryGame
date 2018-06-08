import React from "react";
import "./ColorCard.css";

const ColorCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <ul>
                <li>
                    <strong>Name:</strong> {props.name}
                </li>
            </ul>
        </div>
    </div>

);

export default ColorCard;