import React, { useState } from 'react';

function Contact() {

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Set the input fields to blank.
    const [fieldsState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = fieldsState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        setFormState({...fieldsState, [e.target.name]: e.target.value})

        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Sorry. Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Sorry. Your ${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
        
        if (!errorMessage) {
            setFormState({ ...fieldsState, [e.target.name]: e.target.value });
        }
    }    

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section id="contact">
            <h2 class="left-content">Contact</h2>
            <div class="right-content">
                <h3>Contact me!</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="errormessage">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit">Submit</button>
                </form>
                <h3>Daniel Yoshizawa</h3>
                <address>
                    <ul>
                        <li>Github: <a href="https://github.com/DYoshizawa079">https://github.com/DYoshizawa079</a></li>
                        <li>Linkedin: <a href="https:www.linkedin.com/in/daniel-yoshizawa-5b553717">www.linkedin.com/in/daniel-yoshizawa-5b553717</a></li>
                        <li>Facebook: <a href="https://www.facebook.com/danielyoshizawa">www.facebook.com/danielyoshizawa</a></li>
                    </ul>
                </address>
            </div>
        </section>
    )
}

export default Contact;