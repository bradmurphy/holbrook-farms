import React from 'react';

// components
import Logo from './Logo';

const Menu = ({children,  open}) => (
    <aside className={`menu ${!open ? 'menu--closed' : ''}`}>
        <Logo menu />
        {children}
    </aside>
);

export default Menu;