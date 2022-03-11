import React, { useState } from 'react';

function Contact() {
    return (
        <section id="contact">
            <h2 class="left-content">Contact</h2>
            <div class="right-content">
                <h3>Contact me!</h3>
                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <label>Email Address</label>
                        <input type="email" name="email" />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea></textarea>
                    </div>
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