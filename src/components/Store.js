import React, { useReducer } from 'react';
import { data } from './';

// components
import reducer from '../reducer';
import { Context } from './';

const Store = ({children}) => {
    const [state, dispatch] = useReducer(reducer, data);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export default Store;