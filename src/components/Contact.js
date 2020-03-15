import React from 'react';
import GoogleMapReact from 'google-map-react';

// components
import {
    Info,
    Marker
} from './';

const Contact = ({nameErrorStyle, emailErrorStyle, messageErrorStyle, validate, state, dispatch, handleFormSubmit}) => (
    <section className="contact">
        <div className="contact__left">
            <div id="map">
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyCzrdGdYeAdvD8Y3RnUUvgwcGmH5cAdKko'}}
                    center={[34.2057698, -84.2684935]}
                    zoom={17.25} />
                        <Info contact={state.contact} lat={34.2057698} lng={-84.2684935} />
                        <Marker lat={34.2057698} lng={-84.2684935} />
            </div>
        </div>
        <div className="contact__right">
            <span className="contact__form-thankyou" hidden={!state.input.sent}>
            Thanks for reaching out, we'll get back to you as soon as possible!
        </span>
            <form action="#" className="contact__form-wrapper" hidden={state.input.sent}>
                <input autoComplete="off" type="text" name="name" placeholder="Name"
                       className={nameErrorStyle}
                       value={state.input.name}
                       onChange={(e) => {
                           const payload = {
                               input: { ...state.input, name: e.target.value },
                               errors: { ...state.errors, name: validate(e.target.value, 'name') }
                           };

                           dispatch({ type: 'UPDATE_FORM', payload });
                       }}
                />
                <input autoComplete="off" type="email" name="email" placeholder="E-mail"
                       className={emailErrorStyle}
                       value={state.input.email}
                       onChange={(e) => {
                           const payload = {
                               input: { ...state.input, email: e.target.value },
                               errors: { ...state.errors, input: { email: validate(e.target.value, 'email') } }
                           };

                           dispatch({ type: 'UPDATE_FORM', payload });
                       }}
                />
                <textarea autoComplete="off" name="message" placeholder="Have a question?  Feel free to reach out!"
                  className={`${messageErrorStyle} contact__form-input--text-area`}
                  onChange={(e) => {
                      const payload = {
                          input: { ...state.input, message: e.target.value },
                          errors: { ...state.errors, input: { message: validate(e.target.value, 'message') } }
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

export default Contact;


