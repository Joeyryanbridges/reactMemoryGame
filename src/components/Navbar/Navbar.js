import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://github.com/Joeyryanbridges/reactmemorygame">
                <h6>created by:</h6><h4>Joey R. Bridges</h4>
            </a>
            <form className="form-inline">
                <a href="https://joeyryanbridges.github.io/joeybridgesportfolio/" className="btn btn-sm btn-outline-primary" role="button">Portfolio</a>
                <a href="https://github.com/Joeyryanbridges" className="btn btn-sm btn-outline-warning" role="button">GitHub</a>
                <a href="https://www.linkedin.com/in/joeyrbridges/" className="btn btn-sm btn-outline-danger" role="button">LinkedIn</a>
            </form>
        </nav>
    </div>
);

export default Navbar;
