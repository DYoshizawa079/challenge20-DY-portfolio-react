import React, { useState } from 'react';

function Project() {

    const [projects] = useState([
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
            name: "Generate Yo' Plate",
            src: "project-generate-yo-plate.jpg",
            deploymentURL: "https://kcfraser.github.io/Generate-yo-plate/",
            githubURL: "https://kcfraser.github.io/Generate-yo-plate/",
        },
        {
            name: "Generate Yo' Plate",
            src: "project-generate-yo-plate.jpg",
            deploymentURL: "https://kcfraser.github.io/Generate-yo-plate/",
            githubURL: "https://kcfraser.github.io/Generate-yo-plate/",
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