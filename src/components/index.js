import { createContext, useEffect } from 'react';

import App from './App';
import Hamburger from './Hamburger';
import Gallery from './Gallery';
import Logo from './Logo';
import Menu from './Menu';
import Nav from './Nav';
import Page from './Page';
import Store from './Store';
import data from '../data';

const Context = createContext(data);

const useWindowEvent = (event, callback) => {
    useEffect(() => {
        window.addEventListener(event, callback);
        return () => window.removeEventListener(event, callback);
    }, [event, callback]);
};

export {
    App,
    data,
    Context,
    Hamburger,
    Gallery,
    Logo,
    Menu,
    Nav,
    Page,
    Store,
    useWindowEvent
}