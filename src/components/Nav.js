import React from 'react';

function Nav({ currentPage, handlePageChange }) {
    return(
        <div>
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
                <a 
                    href='#about'
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About'? 'nav-link active':'nav-link link-secondary'}
                >About
                </a>
            </li>
            <li className='nav nav-item'>
                <a
                    href='#Portfolio'
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio'?'nav-link active':'nav-link link-secondary'}
                >Portfolio
                </a>
            </li>
            <li className='nav-item'>
                <a
                    href='#Contact'
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact'?'nav-link active':'nav-link link-secondary'}
                >Contact
                </a>
            </li>
            <li className='nav-item'>
                <a
                    href='#Resume'
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume'?'nav-link active':'nav-link link-secondary'}
                >Resume
                </a>
            </li>
        </ul>
        </div>
    )
}

export default Nav;