import React from "react";
import "./ColorCard.css";

const ColorCard = props => (
    <img src={props.image} id={props.id} onClick={props.shuffleCards} alt="cardColors" />
);

export default ColorCard;