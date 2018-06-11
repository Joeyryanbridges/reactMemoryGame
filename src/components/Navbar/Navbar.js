import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://github.com/Joeyryanbridges/reactmemorygame">
                <h6>created by:</h6><h4>Joey R. Bridges</h4>
            </a>
            <form class="form-inline">
                <button className="btn btn-sm btn-outline-primary" href="https://joeyryanbridges.github.io/joeybridgesportfolio/" type="button">Portfolio</button>
                <button class="btn btn-sm btn-outline-warning" type="button">GitHub</button>
                <button class="btn btn-sm btn-outline-danger" type="button">LinkedIn</button>
            </form>
        </nav>
    </div>
);

export default Navbar;
