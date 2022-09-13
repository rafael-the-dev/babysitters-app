import React, { createContext, useCallback, useEffect, useRef, useState } from 'react';

export const AppContext = createContext();
AppContext.displayName = 'AppContext';

export const AppContextProvider = ({ children }) => {
    const [ babysitter, setBabysitter ] = useState({
        type: "CRIANCAS"
    });

    const setBabysitterType = useCallback(type => setBabysitter(props => ({
        ...props,
        type
    })), []);

    return (
        <AppContext.Provider value={{ babysitter, setBabysitterType }}>
            { children }
        </AppContext.Provider>
    );
}