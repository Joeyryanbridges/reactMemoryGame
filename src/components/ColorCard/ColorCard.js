import React from "react";
import "./ColorCard.css";

const ColorCard = props => (
    <img alt="cardColors" src={props.image} onClick={props.shuffle} />
);

export default ColorCard;