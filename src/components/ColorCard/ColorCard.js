import React from "react";
import "./ColorCard.css";

const ColorCard = props => (
    <img src={props.image} id={props.id} name={props.name} onClick={props.colorClicked} alt="cardColors" />
);

export default ColorCard;