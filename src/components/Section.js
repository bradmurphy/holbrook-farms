import React from 'react';

const Section = ({children,  headline, id }) => (
    <section className="site__section" id={id}>
        <div className="wrapper">
            <div className="headline__wrapper">
                <h1 className="headline">{headline}</h1>
            </div>
            <div className="section__content">
                {children}
            </div>
        </div>
    </section>
);

export default Section;