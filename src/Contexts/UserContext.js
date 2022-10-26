import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);


    const AuthInfo = { user };
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;