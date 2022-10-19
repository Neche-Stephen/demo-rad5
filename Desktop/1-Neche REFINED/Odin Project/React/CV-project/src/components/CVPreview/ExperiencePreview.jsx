import React from 'react'

export default function ExperiencePreview(props) {
    const CVEX  = props.CVEX;
  return (
    <div>
      {CVEX.map((cv) => {
                        console.log(cv)
                    return (
                      <div key={cv.id}>{cv.text}</div>      
                      );

                    
      })}
    </div>
  )
}
