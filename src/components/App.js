import React, { useContext } from 'react';
import axios from 'axios';

// components
import {
    Contact,
    Context,
    Hamburger,
    Gallery,
    Logo,
    Menu,
    Nav,
    Page,
    useWindowEvent,
    validate
} from './';

const API_PATH = `${window.origin}/api/contact/index.php`;

const App = () => {
    const [ state, dispatch ] = useContext(Context);

    const openMenu = (menu) => menu ? dispatch({ type: 'CLOSE_MENU' }) : dispatch({ type: 'OPEN_MENU' });

    const scrollTo = (e) => {
        e.preventDefault();
        dispatch({ type: 'CLOSE_MENU' });
        const element = document.getElementById(e.target.href.split('#')[1]);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    const switchThumbPos = () => window.matchMedia('(min-width: 768px)').matches ?
        dispatch({ type: 'THUMB_DESKTOP' }) : dispatch({ type: 'THUMB_MOBILE' });

    useWindowEvent('resize', switchThumbPos);
    useWindowEvent('load', switchThumbPos);

    const errStyle = 'contact__form-input contact__form-input--error';

    const nameErrorStyle = state.errors.name ? errStyle : 'contact__form-input';
    const emailErrorStyle = state.errors.email ? errStyle : 'contact__form-input';
    const messageErrorStyle = state.errors.message ? errStyle : 'contact__form-input';

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const nameErr = validate(state.input.name, 'name');
        const emailErr = validate(state.input.email, 'email');
        const messageErr = validate(state.input.message, 'message');

        const canSubmit = !nameErr && !emailErr && !messageErr;

        try {
            if (canSubmit) {
                const resp = await axios.post(`${API_PATH}`,
                    { ...state.input },
                    {
                        headers: { 'content-type': 'application/json' }
                    });
                dispatch({type: 'SEND_FORM', payload: { input: { sent: resp.data.sent} } });
            } else {
                dispatch({type: 'SEND_FORM', payload: {
                    errors: {
                        name: nameErr,
                        email: emailErr,
                        message: messageErr,
                    }
                }});
            }
        }
        catch(e) { dispatch({type: 'SEND_FORM', payload: { input: { error: true } } }); }
    };

    return (
        <div className="app__wrapper">
            <Menu open={state.menu}>
                <Nav click={(e) => scrollTo(e)} />
            </Menu>
            <main className="app__main">
                <Hamburger click={() => openMenu(state.menu)} />
                <Page id="about" headline="About">
                    <Logo mobile />
                    <div className="hero__image">
                        <img src={state.hero} alt="Holbrook Farm" />
                    </div>
                    <p>
                        Holbrook Farm is a full-service family-oriented multi-discipline training and boarding barn conveniently located to North Fulton, Cherokee and Forsyth counties.  The 82-acre property features a 24-stall center aisle barn. Our Outdoor Riding arena is (160x300) with 3” of silica sand maintained daily.  Our 60’ round pen is available for groundwork or training. Holbrook features 3 large turnout pastures and trails. All disciplines are welcome.</p>
                    <p>
                        Mr. Holbrook has shown and exhibited horses for over 30 years throughout the Southeast. Holbrook Farm is a 3rd generation working show barn with the experience and knowledge to provide a safe and exceptional environment. Inside our gates at Holbrook Farm it is our intent to encourage and support a family community for our horses and their partners. If you are looking for a relaxed easy-going environment to call home- please come by and visit us.
                    </p>
                </Page>
                <Page id="boarding" headline="Boarding">
                    <p>
                        At Holbrook we realize that each horse demands daily individualized attention. We recognize that all
                        horses are not created equal and we work with you to design a personalized care program to enhance
                        your equine partnership. (Holbrook offers a limited number of full boarding opportunities- please call for
                        availability)
                    </p>
                    <div className="list">
                        <h3>Amenities</h3>
                        <ul>
                            <li>82 beautiful acres</li>
                            <li>Full Size Arena (160x300) maintained daily 3” silica sand</li>
                            <li>Round Pen available (60 feet)</li>
                            <li>Feeding pastures available</li>
                            <li>Trails available</li>
                            <li>Western Pleasure Trainer available</li>
                            <li>Trailer parking available</li>
                        </ul>
                    </div>
                    <div className="list">
                        <h3>Full Board (<strong>$625</strong>)</h3>
                        <ul>
                            <li>Unlimited access to all amenities</li>
                            <li>Hot and Cold Wash Racks</li>
                            <li>Tack Rooms/Bathroom/Breakroom</li>
                            <li>12x12 Stalls (limited 12x24)</li>
                            <li>Daily stall cleaning</li>
                            <li>Automatic waterers</li>
                            <li>Commercial Fans (available)</li>
                            <li>Daily Turn out</li>
                            <li>All water cleaned daily</li>
                            <li>Variety of quality feeds 2x daily</li>
                            <li>Timothy/Fescue Hay 2x daily</li>
                            <li>Supplement distribution</li>
                            <li>Evening well checks</li>
                        </ul>
                    </div>
                    <div className="list">
                        <h3>Pasture Board (<strong>$325</strong>)</h3>
                        <ul>
                            <li>Unlimited access to all amenities</li>
                            <li>Hot and Cold Wash Racks</li>
                            <li>Tack Rooms/Bathroom/Breakroom</li>
                            <li>All water cleaned daily</li>
                            <li>Personal Feed Room</li>
                            <li>Trails available</li>
                            <li>Medication assistance as needed</li>
                            <li>Feeding pastures available</li>
                            <li>Round bales of Timothy/Fescue Hay</li>
                            <li>Pastures fertilized and sprayed for weeds annually</li>
                            <li>Evening well checks</li>
                        </ul>
                    </div>
                </Page>
                <Page id="gallery" headline="Gallery">
                    <Gallery images={state.images} pos={state.thumbnailPos} />
                </Page>
                <Page id="contact" headline="Contact">
                    <p>
                        Stop by and Visit our Farm.  We are a working farm, so please call us for a convenient appointment -- we like to be able to give you a tour.
                    </p>
                    <Contact
                        nameErrorStyle={nameErrorStyle}
                        emailErrorStyle={emailErrorStyle}
                        messageErrorStyle={messageErrorStyle}
                        validate={validate}
                        state={state}
                        dispatch={dispatch}
                        handleFormSubmit={(e) => handleFormSubmit(e)}
                    />
                </Page>
            </main>
        </div>
    );
};

export default App;
