import React from 'react';

function MemberProject({ title, date, text}) {
    return (
        <article class="project-article">
            <header>
                <h1 class="project-title">{title}</h1>
                <time class="project-date">{date}</time>
            </header>
            <body>
                <p class="project-p">{text}</p>
            </body>
        </article>
    );
}

export default MemberProject;