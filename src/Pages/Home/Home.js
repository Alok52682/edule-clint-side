import React from 'react';
import AboutSection from './AboutSection';
import HomeBanner from './HomeBanner';

// this is the home component where write something about this website and set a courses button 
const Home = () => {
    return (
        <div>
            <HomeBanner />
            <AboutSection />
        </div>
    );
};

export default Home;