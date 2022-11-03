import React, { useState } from 'react';
import AboutMe from './pages/AboutMe/AboutMe';
import Header from './Header'
import Portfolio from './pages//Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';
import Footer from './Footer';
import '../index.css'


export default function BodyContainer() {
    const [currentPage, setCurrentPage] = useState('about-me');

    const renderPage = () => {
        if (currentPage === 'about-me') {
            return <AboutMe />;
        }
        if (currentPage === 'portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'contact') {
            return <Contact />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className='container-fluid row d-flex' id='body_container'>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer />
        </div>
    )
}