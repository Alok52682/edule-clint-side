import React from 'react';
import AboutSection from './AboutSection';
import HomeBanner from './HomeBanner';
import ItClassSection from './ItClassSection';
import Reviews from './Reviews';

// this is the home component where write something about this website and set a courses button 
const Home = () => {
    return (
        <div>
            <HomeBanner />
            <AboutSection />
            <ItClassSection />
            <Reviews />
        </div>
    );
};

export default Home;