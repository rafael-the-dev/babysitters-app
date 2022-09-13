import React, { createContext, useCallback, useEffect, useRef, useState } from 'react';

export const AppContext = createContext();
AppContext.displayName = 'AppContext';

export const AppContextProvider = ({ children }) => {
    const [ filters, setFilters ] = useState({
        type: "CRIANCAS",
        user: "EMPLOYERS"
    });

    const addType = useCallback(type => setFilters(props => ({
        ...props,
        type
    })), []);

    const addUser = useCallback(user => setFilters(props => ({
        ...props,
        user
    })), []);

    return (
        <AppContext.Provider value={{ filters, addType, addUser }}>
            { children }
        </AppContext.Provider>
    );
}