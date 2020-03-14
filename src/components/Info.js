import React from 'react';

const Info = (props) => (
    <div className="info" {...props}>
        <h3>{props.contact.name}</h3>
        <address>
            {props.contact.address}
        </address>
        <a href={`mailto:${props.contact.email}`} className="link">{props.contact.email}</a>
        <div className="info__row">
            <a href={`tel:${props.contact.phoneLink}`} className="link">{props.contact.phone}</a>
            <a href={props.contact.directions} className="link" target="_blank" rel="noreferrer noopener">Directions</a>
        </div>
    </div>
);

export default Info;