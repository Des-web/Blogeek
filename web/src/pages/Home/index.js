import React from 'react';

import Member from './members';
import imgMember1 from './assets/eu.jpeg'

function Home() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Member src={imgMember1} name="Erick Macena" />
    </div>
  );
}

export default Home;
