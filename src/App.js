import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import colors from "./colors.json";


class App extends component {
    state = {
        colors: colors,
        score: 0,
        highScore: 0,
        clickCards: [],
        message: "Click an image to begin"
    };
    // Setting this.state.colors to the colors json array
    setClicked = id => {

        //Make copy of the state colors array
        const colors = this.state.colors;

        //Filter for the clicked color
        const clickedColor = colors.filter(color => color.id === id);


    }

    render() {
        return (
            <Container>
                <Navbar
                    score={this.state.score}
                    message={this.state.message}
                    highScore={this.state.highScore}
                />
                <Row>
                </Row>
            </Container>
        );
    }
}


export default App;


