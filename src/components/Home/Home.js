import React from 'react';
import About from './About/About';
import TopNavbar from '../Shared/TopNavbar/TopNavbar';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <TopNavbar/>
            <Header/>
            <About/>
        </div>
    );
};

export default Home;