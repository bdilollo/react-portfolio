import React, { useState } from "react";
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Nav from './Nav';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        switch(currentPage) {
            case 'Contact':
                return <Contact />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Resume':
                return <Resume />;
            case 'About':
                return <About />;
            default:
                return <About />;
        }
    };
    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div>
            <div className='bg-dark'>
            <h1 className='text-white'>Bradley DiLollo</h1>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
            {renderPage()}
            <div className='d-flex flex-column justify-content-center align-items-center bg-dark'>
                <a href='https://github.com/bdilollo/' alt='github profile' className='nav-link link-secondary'>GitHub</a>
                <a href='https://www.linkedin.com/in/bradley-dilollo/' alt='LinkedIn profile' className='nav-link link-secondary'>LinkedIn</a>
                <a href='https://medium.com/@bldilollo' alt='medium profile' className='nav-link link-secondary'>Medium</a>
            </div>
        </div>
    );
}