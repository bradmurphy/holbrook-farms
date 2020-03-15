import React from 'react';
import Logo from './Logo';

const Info = (props) => (
    <div className="info" {...props}>
        <Logo map />
        <address>
            {props.contact.address}
        </address>
        <a href={`mailto:${props.contact.email}`} className="link">{props.contact.email}</a>
        <div className="info__row">
            <a href={`tel:${props.contact.phoneLink}`} className="link">{props.contact.phone}</a>
            <a href={props.contact.directions} className="link" target="_blank" rel="noreferrer noopener">DIRECTIONS</a>
        </div>
    </div>
);

export default Info;