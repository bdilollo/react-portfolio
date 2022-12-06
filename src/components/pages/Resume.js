import React from 'react';

function Resume() {
    return(
        <div>
            <h2>Resume</h2>
            <a href='example_resume.pdf' download>Take a look at my resume!</a>
            <ul className='skills-list'>Proficiencies:
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>SQL/Sequelize</li>
                <li>MongoDB/Mongoose</li>
                <li>REST APIs</li>
            </ul>
        </div>
    )
}

export default Resume;