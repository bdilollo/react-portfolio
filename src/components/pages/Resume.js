import React from 'react';

function Resume() {
    return(
        <div>
            <h2>Resume</h2>
            <a href='example_resume.pdf' download>Take a look at my resume!</a>
            <ul className='list-group list-group-flush'>Proficiencies:
                <li className='list-group-item'>React</li>
                <li className='list-group-item'>Node</li>
                <li className='list-group-item'>Express</li>
                <li className='list-group-item'>SQL/Sequelize</li>
                <li className='list-group-item'>MongoDB/Mongoose</li>
                <li className='list-group-item'>REST APIs</li>
            </ul>
        </div>
    )
}

export default Resume;