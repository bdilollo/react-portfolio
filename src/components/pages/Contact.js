import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';

function Contact() {
    const [nameInput, setName] = useState('');
    const [emailInput, setEmail] = useState('');
    const [messageInput, setMessage] = useState('');
    const [errorMessage, setError] = useState('');

    const handleBlur = (e) => {

    };

    const handleChange = (e) => {
        switch(e.target.name) {
            case 'contactName':
                setName(e.target.value);
                break;
            case 'contactEmail':
                if(isEmail(e.target.value)) {
                    setEmail(e.target.value);
                    break;
                } else {
                    setError('Please enter a valid email address.')
                    break;
                }
            case 'contactMessage':
                setMessage(e.target.value);
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return(
        <div>
            <h1>Contact</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    value={nameInput}
                    name="contactName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                ></input>
                <input
                    type="text"
                    placeholder="email"
                    value={emailInput}
                    name="contactEmail"
                    onBlur={handleBlur}
                    onChange={handleChange}
                ></input>
                <input
                    type="text"
                    placeholder="message"
                    value={messageInput}
                    name="contactMessage"
                    onBlur={handleBlur}
                    onChange={handleChange}
                ></input>
                <p className='error-message'>{errorMessage}</p>
            </form>
        </div>
    )
}

export default Contact;