import React from 'react'

function Education(props) {
  return (
    <div>
    

    <form onSubmit={props.onSubmitTask}>
    
          {/* SCHOOL */}
          
          <input
          type="text" 
          onChange={props.handleChange}
          value={props.school.text}
          name = 'school'
          placeholder='University'
          />
          {/* CITY */}
          <input
          type="text" 
          onChange={props.handleChange}
          value={props.city.text}
          name = 'city'
          placeholder='City'
          />

          <input
          type="text" 
          onChange={props.handleChange}
          value={props.degree.text}
          name = 'degree'
          placeholder='Degree'
          />

          <input
          type="text" 
          onChange={props.handleChange}
          value={props.course.text}
          name = 'course'
          placeholder='Course'
          />

          {/* YEAR Started */}
          <input 
          type="text"
          onChange={props.handleChange}
          value={props.from.text}
          name='from'
          placeholder='From'
          />

          <input 
          type="text"
          onChange={props.handleChange}
          value={props.to.text}
          name='to'
          placeholder='To'
          />
          <button>Edit</button>
          <button type='submit'>Submit</button>
          <button onClick={() => props.onRemoveEducation(props.myKey)}>Delete</button> <br/> <br />
        </form>
        

    </div>
  )
}

export default Education;