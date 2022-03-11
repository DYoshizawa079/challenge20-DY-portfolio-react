import React from 'react';
import profileImage from "../../assets/images/profile.jpg";

function About() {
    return (
        <section id="about">
            <h2 className="left-content">Profile</h2>
            <article className="right-content">
                <img src={profileImage} alt="Profile - Daniel Yoshizawa" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur voluptatem quos. Optio officiis pariatur, labore temporibus hic iure veritatis sint nam ducimus eius. Illo nisi odit tempore in aspernatur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur voluptatem quos. Optio officiis pariatur, labore temporibus hic iure veritatis sint nam ducimus eius. Illo nisi odit tempore in aspernatur.</p>
            </article>
        </section>
    )
}
export default About;