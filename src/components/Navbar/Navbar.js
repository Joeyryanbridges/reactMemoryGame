import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://github.com/Joeyryanbridges/reactmemorygame">
                <i class="fab fa-react">Joey R. Bridges</i>
            </a>
            <form class="form-inline">
                <button class="btn btn-sm btn-outline-secondary right" type="button">Portfolio</button>
                <button class="btn btn-sm btn-outline-secondary" type="button">GitHub</button>
                <button class="btn btn-sm btn-outline-secondary" type="button">LinkedIn</button>
            </form>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Container>
                <Row>
                    <Col size='lg-4'>
                        <ul>
                            <div className="navbar-header">
                                <button type="button" className="collapse navbar-toggle">
                                    <span className="sr-only">Toggle Navigation</span>
                                    <span className="icon-bar" /> <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                <a href="/" className="navbar-brand">
                                    <h3>React.js</h3>
                                </a>
                            </div>
                        </ul>
                    </Col>
                    <Col size="lg-4">
                        <a className="navbar-brand Message"><h3>{message}</h3></a>
                    </Col>
                    <Col size="lg-4">
                        <a className="navbar-brand Score">
                            <h3>Score: {score} | High Score: {highscore}</h3>
                        </a>
                    </Col>
                </Row>
            </Container>
        </nav>
    </div>
);

export default Navbar;
