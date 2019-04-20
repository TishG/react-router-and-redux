import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {

    return (
        <section className="navbar-fixed">
        <nav className="purple darken-4 text-white">
            <section className="nav-wrapper container">
            {/* eslint-disable-next-line  */}
            <Link to="/" className="brand-logo">Beauty'Times</Link>
            {/* eslint-disable-next-line  */}
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            </section>
        </nav>
        </section>
    );
}

export default withRouter(Navbar);