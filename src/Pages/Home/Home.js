import React from 'react';
import AboutSection from './AboutSection';
import HomeBanner from './HomeBanner';
import ItClassSection from './ItClassSection';

// this is the home component where write something about this website and set a courses button 
const Home = () => {
    return (
        <div>
            <HomeBanner />
            <AboutSection />
            <ItClassSection />
        </div>
    );
};

export default Home;