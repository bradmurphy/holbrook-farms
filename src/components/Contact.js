import React, { useContext } from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';

import { Context, Info, Marker, validate } from './index';
const API_PATH = `${window.origin}/api/contact/index.php`;


const Contact = () => {
    const [ state, dispatch ] = useContext(Context);

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
                    { ...state.contact },
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
        <section className="contact">
            <div className="contact__left">
                <div id="map">
                    <GoogleMapReact
                        bootstrapURLKeys={{key: 'AIzaSyCzrdGdYeAdvD8Y3RnUUvgwcGmH5cAdKko'}}
                        center={[34.2057698, -84.2684935]}
                        zoom={15} />
                            <Info contact={state.contact} lat={34.2057698} lng={-84.2684935} />
                            <Marker lat={34.2057698} lng={-84.2684935} />
                </div>
            </div>
            <div className="contact__right">
                <span className="contact__form-thankyou" hidden={!state.input.sent}>
                Thankyou for contacting me, I'll get back to you as soon as possible!
            </span>
                <form action="#" className="contact__form-wrapper" hidden={state.input.sent}>
                    <input type="text" name="name" placeholder="Name"
                           className={nameErrorStyle}
                           value={state.name}
                           onChange={(e) => {
                               const payload = {
                                   input: { ...state.input, name: e.target.value },
                                   errors: { ...state.errors, name: validate(e.target.value, 'name') }
                               };

                               dispatch({ type: 'UPDATE_FORM', payload });
                           }}
                    />
                    <input type="email" name="email" placeholder="E-mail"
                           className={emailErrorStyle}
                           value={state.input.email}
                           onChange={(e) => {
                               const payload = {
                                   input: { ...state.input, email: e.target.value },
                                   errors: { ...state.errors, email: validate(e.target.value, 'email') }
                               };

                               dispatch({ type: 'UPDATE_FORM', payload });
                           }}
                    />
                    <textarea name="message" placeholder="Have a question?  Feel free to reach out!"
                      className={`${messageErrorStyle} contact__form-input--text-area`}
                      onChange={(e) => {
                          const payload = {
                              input: { ...state.input, message: e.target.value },
                              errors: { ...state.errors, message: validate(e.target.value, 'message') }
                          };

                          dispatch({ type: 'UPDATE_FORM', payload });
                      }}
                      value={state.input.message}>
                    </textarea>
                    <button className="link__submit" onClick={(e) => handleFormSubmit(e)} value="Submit" disabled={state.input.sent} hidden={state.input.error}>Submit</button>
                    <span className="contact__form-error contact__form-error--bottom" hidden={!state.input.error}>
                        Oops! Something went wrong.  Please email me @ <a href={`mailto:${state.contact.email}`}>{state.contact.email}</a>.
                    </span>
                </form>
            </div>
        </section>
    );
};

export default Contact;


