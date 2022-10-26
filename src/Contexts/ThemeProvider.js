import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

// this context for change theme by toggle button
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [light, SetLight] = useState(true);

    const theme = { light, SetLight }
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;