import React from 'react';

import NavBar from '../../Components/NavBar';
import Member from '../../Components/Member';
import imgMember1 from '../../assets/erick-img.jpeg'

function Home() {
  return (
    <div>
      <NavBar/>
      <br></br>
      <h1>Hello, World!</h1>
      <Member src={imgMember1} name="Erick Macena" description="Programador Front-End"/>
    </div>
  );
}

export default Home;
