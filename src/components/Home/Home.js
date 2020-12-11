import React from 'react';
import About from './About/About';
import TopNavbar from '../Shared/TopNavbar/TopNavbar';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Services/>
        </div>
    );
};

export default Home;