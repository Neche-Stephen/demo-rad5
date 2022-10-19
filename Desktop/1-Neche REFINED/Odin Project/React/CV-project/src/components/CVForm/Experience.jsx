import React from 'react'

function Experience(props) {
  return (
    <div>
    

    <form onSubmit={props.onSubmitTask}>
    
          {/* POSITION */}
          
          <input
          type="text" 
          onChange={props.handleChange}
          value={props.position.text}
          name = 'position'
          placeholder='Position'
          />

          <input
          type="text" 
          onChange={props.handleChange}
          value={props.company.text}
          name = 'company'
          placeholder='Company'
          />

          {/* CITY */}
          <input
          type="text" 
          onChange={props.handleChange}
          value={props.cityex.text}
          name = 'cityex'
          placeholder='City'
          />

          {/* YEAR Started */}
          <input 
          type="text"
          onChange={props.handleChange}
          value={props.fromex.text}
          name='fromex'
          placeholder='From'
          />

          <input 
          type="text"
          onChange={props.handleChange}
          value={props.toex.text}
          name='toex'
          placeholder='To'
          />
          <button>Edit</button>
          <button type='submit'>Submit</button>
          <button onClick={() => props.onRemoveEducation(props.myKey)}>Delete</button> <br/> <br />
        </form>
        

    </div>
  )
}

export default Experience