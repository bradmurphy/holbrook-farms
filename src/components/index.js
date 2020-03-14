import { createContext, useEffect } from 'react';

import App from './App';
import Contact from './Contact';
import Hamburger from './Hamburger';
import Info from './Info';
import Gallery from './Gallery';
import Logo from './Logo';
import Marker from './Marker';
import Menu from './Menu';
import Nav from './Nav';
import Page from './Page';
import Store from './Store';
import SVG from './SVG';
import data from '../data';

const Context = createContext(data);

const useWindowEvent = (event, callback) => {
    useEffect(() => {
        window.addEventListener(event, callback);
        return () => window.removeEventListener(event, callback);
    }, [event, callback]);
};

const validate = (input, type) => {
    let validation = null;

    switch (type) {
        case 'name':
            validation = input.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g) ? false : true;
            break;
        case 'email':
            validation = input.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? false : true;
            break;
        default:
            validation = input.length > 0 ? false : true;
            break;
    }

    return validation;
};

export {
    App,
    Contact,
    data,
    Context,
    Gallery,
    Hamburger,
    Info,
    Logo,
    Marker,
    Menu,
    Nav,
    Page,
    Store,
    SVG,
    useWindowEvent,
    validate
}