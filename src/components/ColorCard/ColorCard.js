import React from "react";
import "./ColorCard.css";

const ColorCard = props => (
    <div onClick={() => props.setClicked(props.id)} className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default ColorCard;