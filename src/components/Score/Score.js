import React, { Component } from 'react';

class Score extends Component {

    render() {
        return (
            <div>
                <h3>Score:{this.state.score}</h3>
            </div>
        );
    };
};

export default Score;