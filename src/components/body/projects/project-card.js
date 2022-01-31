import React from 'react';
import './project-card.css';

function ProjectCard({ project }) {
  return (
  <div className='project-card'>
     <div className='project-info'>
     <label className='project-title'>{project.title}</label>
     <div className='project-links'>
      <div className='link-button'>
       <a className='project-link' href={project.demo}><i class="fi-rr-globe"></i>Demo</a>
      </div>
      <div className='link-button'>
       <a className='project-link' href={project.github}><i class="devicon-github-original"></i>Github</a>
      </div>
     </div>
     <p>{project.about}</p>
     <div className='project-tags'>
       {project.tags.map((tag) => {
         return (
           <label className='tag'>{tag}</label>
         )
       })}
     </div>
     </div>
         <img src={project.image} className='project-photo' alt='project'/>
  </div>
  );
}

export default ProjectCard;
