import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Pages/Shared/Navber';
import Footer from '../Pages/Shared/Footer'
import { ThemeContext } from '../Contexts/ThemeProvider';

const Main = () => {
    // this is reciving context value from themeContext
    const { light } = useContext(ThemeContext);

    return (
        <div className={`${light ? undefined : "bg-slate-700"}`}>
            <Navber />
            {/* outlet provide their children by router*/}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;