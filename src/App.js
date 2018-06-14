import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Score from "./components/Score";
import colors from "./colors.json";
import ColorCard from "./components/ColorCard";
import "./App.css";


class App extends Component {

    state = {
        colors,
        score: 0,
        clicked: []
    };

    colorClicked = (e) => {
        const colorId = e.target.id
        const colorName = e.target.name
        if (this.state.clicked.includes(colorId)) {
            alert(`Dude, you can't choose the same color twice!!! ${colorName}\n\nCLICK OK TO RESTART`)
            this.setState({
                score: 0,
                clicked: [],
            })
        } else {
            const colorArray = this.state.clicked
            colorArray.push(colorId)
            this.setState({
                score: this.state.score + 1,
                clicked: colorArray
            })
            if (this.state.score === 11) {
                alert('You beat Colors!');
                this.setState({
                    score: 0,
                    clicked: []
                })
            }
        }
        this.shuffleCards();
    }

    shuffleCards = () => {
        const colorCardSelect = this.state.colors;
        for (let a = colorCardSelect.length - 1; a >= 0; a--) {
            const b = Math.floor(Math.random() * (a + 1));
            [colorCardSelect[a], colorCardSelect[b]] = [colorCardSelect[b], colorCardSelect[a]];

        }
        this.setState({
            colors: colorCardSelect
        })
    }

    render() {
        return (
            <div className="container">
                <Wrapper />
                <Navbar />
                <Jumbotron />
                <div className="row animated slideInUp">
                    <div className="col-12">
                        <Score
                            score={this.state.score}
                        />
                    </div>
                </div>
                <div className="row animated slideInUp">
                    <div className="col-12">
                        {this.state.colors.map(color => (
                            <ColorCard
                                id={color.id}
                                key={color.id}
                                image={color.image}
                                shuffleCards={this.shuffleCards}
                                colorClicked={this.colorClicked}
                            />
                        ))}
                    </div>
                </div >
            </div >

        );
    }
}


export default App;


