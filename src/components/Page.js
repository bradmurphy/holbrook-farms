import React from 'react';

const Page = ({children,  headline, id}) => (
    <section className="app__section" id={id}>
        <div className="wrapper">
            <div className="headline__wrapper">
                <h1 className="headline">{headline}</h1>
            </div>
            <div className="app__content">
                {children}
            </div>
        </div>
    </section>
);

export default Page;