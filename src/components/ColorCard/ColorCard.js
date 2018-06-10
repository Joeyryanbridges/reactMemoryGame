import React from "react";
import "./ColorCard.css";

const ColorCard = props => (
    <img src={props.image} onClick={props.shuffle} id={props.id} alt="cardColors" />
);

export default ColorCard;