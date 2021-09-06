import React from 'react';

import NavBar from '../../Components/NavBar';
import ProjectCard from '../../Components/ProjectCard';
import MemberCard from '../../Components/MemberCard';

import projectImgTemplate from '../../assets/my-js-gif.gif';
import erickImgTemplate from '../../assets/erick-img.jpeg';

const LOREM_PARAGRAPH = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illo temporibus laudantium iste tempora sit, molestias excepturi amet ut et a pariatur libero commodi non eaque in veritatis, earum dignissimos!';

const LOREM_MINI = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illo temporibus laudantium iste tempora sit.';

function About() {
    return (
        <div>
            <NavBar />
            <h2 className="title1">Quem somos ?</h2>

            <p className="text1">{LOREM_PARAGRAPH + "\n" + LOREM_PARAGRAPH + "\n" + LOREM_PARAGRAPH}</p>

            <h2 className="title1">Nossos projetos</h2>

            <ul className="projectCardList">
                <li>
                    <ProjectCard description={LOREM_MINI} imgsrc={projectImgTemplate}></ProjectCard>
                </li>
                <li>
                    <ProjectCard description={LOREM_MINI} imgsrc={projectImgTemplate}></ProjectCard>
                </li>
                <li>
                    <ProjectCard description={LOREM_MINI} imgsrc={projectImgTemplate}></ProjectCard>
                </li>
            </ul>

            <h2 className="title1">Membros</h2>

            <ul className="projectCardList">
                <li>
                    <MemberCard name="Erick Macena" imgsrc={erickImgTemplate}></MemberCard>
                </li>
                <li>
                    <MemberCard name="Erick Macena" imgsrc={erickImgTemplate}></MemberCard>
                </li>
                <li>
                    <MemberCard name="Erick Macena" imgsrc={erickImgTemplate}></MemberCard>
                </li>
            </ul>
        </div>
    );
}

export default About;