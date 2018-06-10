import React from "react";
import "./ColorCard.css";

const ColorCard = (props) => (
    <div className="card">
        <div className="img-container">
            <img onClick={() => props.shuffle(props.id)} className="shuffle" alt={props.name} src={props.image} />
        </div>
    </div>
);

export default ColorCard;