import React from 'react';

function Navigation({changePage}) {
    return (
        <nav>
            <ul>
                <li><a href="#" onClick={() => changePage('About')}>About Me</a></li>
                <li><a href="#" onClick={() => changePage('Project')}>Portfolio</a></li>
                <li><a href="#" onClick={() => changePage('Contact')}>Contact</a></li>
                <li><a href="#" onClick={() => changePage('Resume')}>Resume</a></li>
            </ul>
        </nav>
    )
}
export default Navigation;