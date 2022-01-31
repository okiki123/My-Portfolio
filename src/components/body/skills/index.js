import React from 'react';
import './skills.css';
import Seperator from '../../common/seperator';
import { SkillsData } from '../../data/skills';
function Skills() {
  const data = SkillsData
  return <div className='skills'>
    <Seperator />
    <label className='section-title'>Skills</label>
    <div className='skills-container'>
      {data.map((item) => {
        return (
          <div>
            
          </div>
        )
      })}
    </div>
  </div>;
}

export default Skills;
