import React from 'react';

import NavBar from '../../Components/NavBar';
import Member from '../../Components/Member';

import imgMember1 from '../../assets/erick-img.jpeg'

function Home() {
  return (
    <div>
      <NavBar/>
      <Member src={imgMember1} name="Erick Macena" description="Programador Front-End"/>
    </div>
  );
}

export default Home;
