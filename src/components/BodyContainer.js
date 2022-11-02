import React, { useState } from 'react';
import AboutMe from './pages/AboutMe';
import Header from './Header'
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';

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
        <div className='bg-secondary h-100 w-100 container-fluid'>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            <Footer />
            {renderPage()}
        </div>
    )
}