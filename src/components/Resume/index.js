import React from 'react';
import resume from "../../assets/resume.pdf";

function Resume() {
    return (
        <section id="resume">
            <h2 class="left-content">Resume</h2>
            <div class="right-content">
                <p><a href={resume}>Click here</a> to download my resume.</p>
            </div>
        </section>
    )
}

export default Resume;