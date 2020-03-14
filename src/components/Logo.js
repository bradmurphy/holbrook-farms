import React from 'react';

const Logo = ({ mobile }) => (
    <div className={`logo ${mobile ? 'logo--mobile' : ''}`}>
        <div className="logo-wrapper">
            <h1>H</h1>
        </div>

        <span><em>Holbrook Farm</em></span>
    </div>
);

export default Logo;