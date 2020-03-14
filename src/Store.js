import React, {createContext, useReducer} from 'react';
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
export default Store;