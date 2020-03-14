import React, { createContext, useReducer, useEffect} from 'react';
import data from './data';

// components
import Reducer from './Reducer'

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, data);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(data);
export const useWindowEvent = (event, callback) => {
    useEffect(() => {
        window.addEventListener(event, callback);
        return () => window.removeEventListener(event, callback);
    }, [event, callback]);
};
export default Store;