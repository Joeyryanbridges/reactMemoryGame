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
    </div>
);

export default Navbar;
