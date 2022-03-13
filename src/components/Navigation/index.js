import React from 'react';

function Navigation({changePage}) {
    return (
        <nav>
            <ul>
                <li><span onClick={() => changePage('About')}>About Me</span></li>
                <li><span onClick={() => changePage('Project')}>Portfolio</span></li>
                <li><span onClick={() => changePage('Contact')}>Contact</span></li>
                <li><span onClick={() => changePage('Resume')}>Resume</span></li>
            </ul>
        </nav>
    )
}
export default Navigation;