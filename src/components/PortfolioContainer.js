// Header
    // name
    // nav to different sections (conditional rendering) (CSS to highlight current page)

// Content (probably separate React file(s))
    // About Me (default)
                // pic + short bio
            // Portfolio
                // images of six applications (deployed + repo)
            // Contact
                // form w/ fields for name, email, message
                // field required noti when clicking out w/out entering anything
                // email validation
            // Resume
                // downloadable resume
                // list of proficiencies

// Footer
    // text or image links to GitHub, LinkedIn, third platform (Medium?)

import React, { useState } from "react";
// import { About, Contact, Portfolio, Resume } from './pages';
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
                break;
            case 'Portfolio':
                return <Portfolio />;
                break;
            case 'Resume':
                return <Resume />;
                break;
            default:
                return <About />;
        }
    };
    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}