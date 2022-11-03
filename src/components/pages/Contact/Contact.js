import React, { useState } from 'react';
import { validateEmail, validateEmpty } from '../../../utils/helpers';

function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [inputName, setInputName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        } else {
            setInputName(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !email) {
            setErrorMessage('Email is invalid.');
            return;
        }
        else if (!message) {
            setErrorMessage('Please enter message');
            return;
        }
        else if(!inputName) {
            setErrorMessage('Please enter a name');
            return;
        }

        setEmail('');
        setMessage('');
        setInputName('');
    }

    return (
        <div className='container row vh-100 text-white'>
            <h1>Contact Me</h1>
            <form>
                <div className="form-group col-4">
                    <label for="exampleFormControlSelect1">Name</label>
                    <input type='text' name='inputName' value={inputName} onChange={handleInputChange} className='form-control' />
                </div>
                <div className="form-group col-4">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" value={email} name="email" onChange={handleInputChange} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="form-group col-4">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" value={message} name='message' onChange={handleInputChange} id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button type="submit" onClick={handleFormSubmit} className="btn btn-primary mb-2">Submit</button>
                <p>{errorMessage}</p>
            </form>
            
        </div>
    )
}

export default Contact;