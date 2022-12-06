import React from 'react';

function About() {
    return (
        <div>
            <h2>About Me</h2>
            <img 
                className='img-thumbnail'
                style={{ width: "10rem" }}
                src="images/portfolio-photo.jpg" 
                alt="recent"/>
            <p>
                Hi! My name is Bradley, and I'm just beginning my journey into the world of software development. I'm currently a student in the Full-Stack bootcamp through UC Berkeley Extension. I've still got a ton to learn, but I'm really excited to continue expanding my skills and becoming a software developer!
            </p>
        </div>
    )
}

export default About;