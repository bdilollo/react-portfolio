import React from 'react';

function Portfolio() {
    return(
        <div>
            <h2>Portfolio</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-sm-6'>
                        <h4 className='mt-1'>City Grader</h4>
                        <img 
                            className='img-thumbnail' 
                            src="images/portfolio-ss1.png" 
                            alt="City Grader"/>
                        <a 
                            href='https://github.com/bdilollo/neighborhood-grader' 
                            alt='GitHub repo'>
                            GitHub Repo
                        </a>
                        <br />
                        <a
                            href='https://joedjensen.github.io/neighborhood-grader/'
                            alt='Deployed application'>
                            Deployed Application
                        </a>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <h4 className='mt-1'>Daily Planner</h4>
                        <img 
                            className='img-thumbnail' 
                            src="images/portfolio-ss2.png" 
                            alt="City Grader"/>
                        <a 
                            href='https://github.com/bdilollo/daily-planner' 
                            alt='GitHub repo'>
                            GitHub Repo
                        </a>
                        <br />
                        <a
                            href='https://bdilollo.github.io/daily-planner/'
                            alt='Deployed application'>
                            Deployed Application
                        </a>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                    <h4 className='mt-1'>Text Editor PWA</h4>
                        <img 
                            className='img-thumbnail' 
                            src="images/portfolio-ss3.png" 
                            alt="City Grader"/>
                        <a 
                            href='https://github.com/bdilollo/text-editor' 
                            alt='GitHub repo'>
                            GitHub Repo
                        </a>
                        <br />
                        <a
                            href='https://ancient-sea-72366.herokuapp.com/'
                            alt='Deployed application'>
                            Deployed Application
                        </a>
                    </div>
                {/* </div>
                <div className='row'> */}
                    <div className='col-md-4 col-sm-6'>
                    <h4 className='mt-1'>HTML + CSS Portfolio</h4>
                        <img 
                            className='img-thumbnail' 
                            src="images/portfolio-ss4.png" 
                            alt="City Grader"/>
                        <a 
                            href='https://github.com/bdilollo/professional-portfolio' 
                            alt='GitHub repo'>
                            GitHub Repo
                        </a>
                        <br />
                        <a
                            href='https://bdilollo.github.io/professional-portfolio/'
                            alt='Deployed application'>
                            Deployed Application
                        </a>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                    <h4 className='mt-1'>College Tracker</h4>
                        <img 
                            className='img-thumbnail' 
                            src="images/portfolio-ss5.png" 
                            alt="City Grader"/>
                        <a 
                            href='https://github.com/bdilollo/College-Tracker' 
                            alt='GitHub repo'>
                            GitHub Repo
                        </a>
                        <br />
                        <a
                            href='https://college-tracker123.herokuapp.com/'
                            alt='Deployed application'>
                            Deployed Application
                        </a>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                    <h4 className='mt-1'>Code Quiz</h4>
                        <img 
                            className='img-thumbnail' 
                            src="images/portfolio-ss6.png" 
                            alt="City Grader"/>
                        <a 
                            href='https://github.com/bdilollo/code-quiz' 
                            alt='GitHub repo'>
                            GitHub Repo
                        </a>
                        <br />
                        <a
                            href='https://bdilollo.github.io/code-quiz/'
                            alt='Deployed application'>
                            Deployed Application
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;