import React, { Component } from 'react';
import "./Score.css";

class Score extends Component {

    render() {
        return (
            <div>
                <center><h3>Score:{this.props.score}</h3></center>
            </div>
        );
    };
};

export default Score;