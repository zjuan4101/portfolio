import React, { useState, useEffect } from 'react'
import './Projects.module.scss';

function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
      // Fetch projects data from backend when component mounts
      fetch('/api/projects') // Assuming your backend serves projects data at /api/projects
        .then(response => response.json())
        .then(data => setProjects(data))
        .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div className="projects-showcase">
          <h2>Projects Showcase</h2>
          <div className="project-card">
            <h3>Project 1</h3>
            <p>Description of Project 1</p>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>Description of Project 2</p>
          </div>
          {/* Add more project cards as needed */}
        </div>
      );
    }
    

export default Projects;
