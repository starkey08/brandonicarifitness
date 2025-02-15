// components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Hamburger from "./hamburger";

const Navbar: React.FC = () => {
    return (
        <div className = "navigation">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/clients">Clients</Link>
                </li>
                <li>
                    <Link to="/exercises">Exercises</Link>
                </li>
                {/* Add more navigation links as needed */}
            </ul>
            <Hamburger />

        </div>
    );
};

export default Navbar;