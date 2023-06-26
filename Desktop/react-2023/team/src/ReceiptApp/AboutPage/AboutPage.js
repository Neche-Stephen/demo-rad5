import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../Navbar';

const AboutPage = () => {
  return (
    <>
      <Container>
      <NavBar />
    </Container>
    <div className="about-page">
      <Container>
        <h2>About Receipt Generator</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut libero sed elit elementum ultrices vel vel nunc. Mauris posuere tellus in lacinia hendrerit. Nunc tristique metus a erat malesuada commodo. Mauris accumsan risus at sapien tincidunt, vitae gravida nulla molestie. Sed ut odio at elit blandit facilisis. Duis vel arcu velit. Donec tincidunt, ipsum vitae pharetra facilisis, odio odio euismod mi, eget volutpat sem quam in lectus.</p>
      </Container>
    </div>
    </>
  );
};

export default AboutPage;
