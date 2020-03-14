import React, { Component } from 'react';

class Logo extends Component {
    componentDidMount() {
        const { mobile } = this.props;

        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext('2d');
        this.font = '32px Playfair Display bold';
        this.w = this.canvas.width;
        this.h = this.canvas.height;
        this.curve = 60;
        this.offsetY = 4;
        this.bottom = 200;
        this.textHeight = 64;
        this.isTri = false;
        this.dltY = null;
        this.angleSteps = 180 / this.w;
        this.i = this.w;
        this.y = null;

        this.os = document.createElement('canvas');
        this.octx = this.os.getContext('2d');

        this.os.width = this.w;
        this.os.height = this.h;

        this.octx.font = this.font;
        this.octx.fillStyle = mobile ? '#111' : '#fff';
        this.octx.textBaseline = 'top';
        this.octx.textAlign = 'center';

        this.renderText();
    };

    renderText() {
        /// clear canvases
        this.octx.clearRect(0, 0, this.w, this.h);
        this.ctx.clearRect(0, 0, this.w, this.h);

        /// draw text (text may change)
        this.octx.fillText('HOLBROOK FARM', this.w * 0.5, 0);

        /// slide and dice
        this.dltY = this.curve / this.textHeight;  /// calculate delta for roof/triangle
        this.y = 0;                      /// reset y in case we do roof
        this.i = this.w;                      /// init "x"

        while (this.i--) {

            if (this.isTri) {
                /// bounce delta value mid-way for triangle
                this.y += this.dltY;
                if (this.i === (this.w * 0.5)|0) this.dltY = -this.dltY;

            } else {
                /// calc length based on radius+angle for curve
                this.y = this.bottom - this.curve * Math.sin(this.i * this.angleSteps * Math.PI / 180);
            }

            /// draw a slice
            this.ctx.drawImage(this.os, this.i, 0, 1, this.textHeight,
                this.i, this.h * 0.5 - this.offsetY / this.textHeight * this.y, 1, this.y);
        }
    };

    render() {
        const { mobile } = this.props;
        return (
            <div className={`logo ${mobile ? 'logo--mobile' : ''}`}>
                <div className="logo-wrapper">
                    <h1>H</h1>
                </div>

                <canvas id="canvas" ref="canvas"></canvas>
            </div>
        );
    }
}

export default Logo;