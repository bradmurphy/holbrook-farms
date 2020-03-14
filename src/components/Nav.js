import React from 'react';

const Nav = ({click}) => (
    <nav className="nav">
        <ul>
            <li><a href="#about" onClick={click}>About</a></li>
            <li><a href="#boarding" onClick={click}>Boarding</a></li>
            <li><a href="#gallery" onClick={click}>Gallery</a></li>
            <li><a href="#contact" onClick={click}>Contact</a></li>
        </ul>
    </nav>
);

export default Nav;