import React from 'react';

function About({ logoImage, aboutText }) {
  return (
    <aside>
      <img src={logoImage} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
