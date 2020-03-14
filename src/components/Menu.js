import React from 'react';

const Menu = ({children,  open}) => (
    <aside className={`site__menu ${!open ? 'site__menu--closed' : ''}`}>

        <div className="site__logo">
            <div className="site__logo-wrapper">
                <h1>H</h1>
            </div>

            <span><em>Holbrook Farms</em></span>
        </div>

        {children}
    </aside>
);

export default Menu;