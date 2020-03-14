import React, { useRef } from 'react';

// components
import { useWindowEvent } from './';

const Logo = ({mobile}) => {
    const canvas = useRef(null);

    useWindowEvent('load', () => {
        const ctx = canvas.current.getContext('2d');
        const font = '32px Playfair Display bold';
        const w = canvas.current.width;
        const h = canvas.current.height;
        const curve = 60;
        const offsetY = 4;
        const bottom = 200;
        const textHeight = 64;
        const angleSteps = 180 / w;

        let i = w;
        let y = null;

        const os = document.createElement('canvas');
        const octx = os.getContext('2d');

        os.width = w;
        os.height = h;

        octx.font = font;
        octx.fillStyle = mobile ? '#111' : '#fff';
        octx.textBaseline = 'top';
        octx.textAlign = 'center';

        octx.clearRect(0, 0, w, h);
        ctx.clearRect(0, 0, w, h);

        octx.fillText('HOLBROOK FARM', w * 0.5, 0);

        y = 0;
        i = w;

        while (i--) {
            y = bottom - curve * Math.sin(i * angleSteps * Math.PI / 180);

            ctx.drawImage(os, i, 0, 1, textHeight,
                i, h * 0.5 - offsetY / textHeight * y, 1, y);
        }
    });

    return (
        <div className={`logo ${mobile ? 'logo--mobile' : ''}`}>
            <div className="logo-wrapper">
                <h1>H</h1>
            </div>

            <canvas id="canvas" ref={canvas}></canvas>
        </div>
    );
};

export default Logo;