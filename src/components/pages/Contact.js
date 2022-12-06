import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';

function Contact() {
    const [nameInput, setName] = useState('');
    const [emailInput, setEmail] = useState('');
    const [messageInput, setMessage] = useState('');
    const [errorMessage, setError] = useState('');

    const handleBlur = (e) => {
        if(!e.target.value) {
            setError('*This field is required.')
        } else {
            if(errorMessage !== 'Please enter a valid email address.') {
                setError('');
            }
        }
    };

    const handleChange = (e) => {
        switch(e.target.name) {
            case 'contactName':
                setName(e.target.value);
                break;
            case 'contactEmail':
                setEmail(e.target.value);
                if(!isEmail(e.target.value) && e.target.value.length > 0) {
                    setError('Please enter a valid email address.')
                    break;
                } else {
                    setError('')
                    break;
                };
            case 'contactMessage':
                setMessage(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setMessage('');
        setError('Thank you for your message!');
    }

    return(
        <div>
            <h2>Contact</h2>
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
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact;