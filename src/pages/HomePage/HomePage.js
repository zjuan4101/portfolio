import React from 'react';
import Projects from '../../components/Projects/Projects';
import ContactForm from '../../components/ContactForm/ContactForm';
import './HomePage.module.scss';

function HomePage() {
  return (
    <div className="home-page">
      <div className="content">
        <h2>Welcome to My Portfolio!</h2>
        <p>This is where you can introduce yourself and provide any relevant information about your skills, experiences, and projects.</p>
        
        <Projects />
        
        <ContactForm />
      </div>
    </div>
  );
}

export default HomePage;

