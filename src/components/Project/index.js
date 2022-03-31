import React, { useState } from 'react';

function Project() {

    const [projects] = useState([
        {
            name: "Boats Boats Boats!!",
            src: "project-boatsboatsboats.jpg",
            deploymentURL: "https://infinite-escarpment-26658.herokuapp.com/",
            githubURL: "https://github.com/QuinnPucci/full-stack-ecommerce",
        },
        {
            name: "Petbook",
            src: "project-petbook.png",
            deploymentURL: "https://infinite-escarpment-26658.herokuapp.com/",
            githubURL: "https://github.com/QuinnPucci/petbook",
        },
        {
            name: "Generate Yo' Plate",
            src: "project-generate-yo-plate.jpg",
            deploymentURL: "https://kcfraser.github.io/Generate-yo-plate/",
            githubURL: "https://kcfraser.github.io/Generate-yo-plate/",
        },
        {
            name: "Budget App",
            src: "project-budgetapp.jpg",
            deploymentURL: "https://agile-retreat-88774.herokuapp.com/",
            githubURL: "https://github.com/DYoshizawa079/challenge19-budget-alphaD",
        },
        {
            name: "Coding Quiz Challenge",
            src: "project-codingquiz.jpg",
            deploymentURL: "https://dyoshizawa079.github.io/challenge4-code-quiz/",
            githubURL: "https://kcfraser.github.io/Generate-yo-plate/",
        },
        {
            name: "Horiseon Site Refactoring",
            src: "project-horiseon.png",
            deploymentURL: "https://dyoshizawa079.github.io/challenge1-horiseon-refactored/",
            githubURL: "https://github.com/DYoshizawa079/challenge1-horiseon-refactored",
        },
        {
            name: "Run Buddy",
            src: "project-runbuddy.png",
            deploymentURL: "https://dyoshizawa079.github.io/run-buddy/",
            githubURL: "https://github.com/DYoshizawa079/run-buddy",
        },
    ]);

    return (
        <section id="portfolio">
            <h2 className="left-content">Portfolio</h2>
            <div className="right-content projects-container">

                {projects.map((project) => (
                    <article className="project">
                        <a href={project.deploymentURL}><img src={require(`../../assets/images/${project.src}`)} alt={project.name} /></a>
                        <h3><a href={project.deploymentURL}>{project.name}</a></h3>
                        <span><a href={project.githubURL}>Github repository</a></span>
                    </article>
                ))}

            </div>
        </section>
    )
}

export default Project;