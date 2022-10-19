import React from 'react'

export default function PersonalPreview(props) {
    const  CVP  = props.CVP;
  return (
    <div>
      {CVP.map((cv) => {
                    if(cv.text === props.image)
                    return (
                    <div key={cv.id}><img src={cv.text} alt="" /></div>      
                    );
                    else
                    return (
                      <div key={cv.id}>{cv.text}</div>      
                      );

                    
      })}
    </div>
  )
}
