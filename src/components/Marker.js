import React from 'react';
import { SVG } from './';

const Marker = (props) => (
    <div className="marker" {...props}>
        <SVG />
    </div>
);

export default Marker;