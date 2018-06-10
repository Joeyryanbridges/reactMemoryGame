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
        colors,
        score: 0

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
                <Row />
                <div className="col-6">
                    <Score
                        score={this.state.score}
                    />
                </div>
                <Row />
                <div className="col-12">
                    {this.state.colors.map(color => (
                        <ColorCard
                            id={color.id}
                            key={color.id}
                            image={color.image}
                            shuffle={this.suffleCards}
                        />
                    ))}

                </div >
            </div>
        );
    }
}


export default App;


