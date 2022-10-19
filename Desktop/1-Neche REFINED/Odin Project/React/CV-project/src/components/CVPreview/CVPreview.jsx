import React from 'react'
import PersonalPreview from './PersonalPreview';
import EducationPreview from './EducationPreview';
import ExperiencePreview from './ExperiencePreview';

const CVPreview = (props) => {
  // const tasks  = props.CV;
  //const { tasks } = props; was not working
  return (
    <div className='cvpreview'>
      <PersonalPreview CVP = {props.CVP}
                       image = {props.image}          
      />

      <EducationPreview CVED = {props.CVED} />
      <ExperiencePreview CVEX = {props.CVEX}  />
    </div>

    
  )
}

export default CVPreview