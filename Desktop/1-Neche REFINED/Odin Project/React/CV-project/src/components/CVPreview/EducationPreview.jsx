import React from 'react'

export default function EducationPreview(props) {
    const  CVED  = props.CVED;
  return (
    <div>
      {CVED.map((cv) => {
                        // console.log(cv)
                    return (
                      <div key={cv.id}>{cv.text}</div>      
                      );

                    
      })}
    </div>
  )
}
