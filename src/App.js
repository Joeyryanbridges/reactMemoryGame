import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Score from "./components/Score";
import colors from "./colors.json";
import ColorCard from "./components/ColorCard";


class App extends Component {

    state = {
        colors,
        score: 0,
    };


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
                <div className="row">
                    <div className="col-12">
                        <Score
                            score={this.state.score}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {this.state.colors.map(color => (
                            <ColorCard
                                id={color.id}
                                key={color.id}
                                image={color.image}
                                shuffleCards={this.shuffleCards}
                            />
                        ))}
                    </div>
                </div >
            </div >

        );
    }
}


export default App;


