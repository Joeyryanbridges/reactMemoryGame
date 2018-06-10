import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Row from "./components/Row";
import Score from "./components/Score";
import colors from "./colors.json";
import ColorCard from "./components/ColorCard";


class App extends Component {
    state = {
        colors
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
                <Row />
                <div className="col-12">
                    <Jumbotron />
                </div>
                <Row />
                <div className="col-6">
                    <Score />
                </div>
                <Row />
                <div className="col-12">
                    {this.state.colors.map(colors => (
                        <ColorCard
                            id={colors.id}
                            key={colors.id}
                            cardImage={colors.image}
                            shuffle={this.suffleCards}
                        />
                    ))}
                </div>
            </div>
        );
    }
}


export default App;


