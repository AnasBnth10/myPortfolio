import React from 'react';
import {SiHashnode} from 'react-icons/si';
import './skillsBox.css';

function SkillsBox(props) {

  let skills_col1 = [];
  let skills_col2 = [];

  let middleOfArray = parseInt(props.skills.length / 2) - 1;
  
  console.log(props.skills.length);

for (let i = 0;  i <= middleOfArray;i++) {
  skills_col1.push (<article className='skill'>
      <SiHashnode/>
      <h4>{props.skills[i].name}</h4>
  </article>);
}

console.log(middleOfArray);

for (let i = (middleOfArray + 1);  i < props.skills.length ;i++) {
  
  skills_col2.push (<article className='skill'>
      <SiHashnode/>

      
      <h4>{props.skills[i].name}</h4>
  </article>);
}

console.log(skills_col2);




   
    return (
        <div className='skillBox' id={props.id} style={{backgroundColor: props.title === 'Frameworks' || props.title === 'Office 365' ? 'var(--color-secondary)' : 'var(--color-primary)'}}>
            <h3>{props.title}</h3>
            <br/>
            <div className='skills_columns'>
            <div className='skills_column col1'>
            {skills_col1}
              
            </div>
            <div className='skills_column col2'>
            {skills_col2}
            </div>
            </div>
        </div>
    )
}

export default SkillsBox