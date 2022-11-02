import React, { useState } from 'react';
import AboutMe from './pages/AboutMe';
import Header from './Header'
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

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
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    )
}