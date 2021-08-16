import React from 'react';

import Member from '../../Components/Member';
import NavBar from '../../Components/NavBar';
import MemberProject from '../../Components/MemberProject';

import imgMember1 from '../../assets/erick-img.jpeg'

const LOREM_PARAGRAPH = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illo temporibus laudantium iste tempora sit, molestias excepturi amet ut et a pariatur libero commodi non eaque in veritatis, earum dignissimos!'

function About() {
    return (
        <div>
            <Member src={imgMember1} name="Erick Macena" description="Programador Front-End"/>
            <NavBar/>
            <ol>
                <li>
                    <MemberProject title="Primeiro Website" date="04/12/2020" text={LOREM_PARAGRAPH + '\n' + LOREM_PARAGRAPH + '\n' + LOREM_PARAGRAPH}/>
                </li>
                <li>
                    <MemberProject title="Primeiro Website" date="04/12/2020" text={LOREM_PARAGRAPH + '\n' + LOREM_PARAGRAPH + '\n' + LOREM_PARAGRAPH}/>
                </li>
                <li>
                    <MemberProject title="Primeiro Website" date="04/12/2020" text={LOREM_PARAGRAPH + '\n' + LOREM_PARAGRAPH + '\n' + LOREM_PARAGRAPH}/>
                </li>
            </ol>
        </div>
    );
}

export default About;