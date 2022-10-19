import React from 'react'

function Personal(props) {
  return (
    <div>

    <form onSubmit={props.onSubmitTask}>
          <h5>Personal Information</h5>
          <input
          type="text" 
          onChange={props.handleChange}
          value={props.firstName.text}
          name='firstname'
          placeholder='First Name'
          />

          <input 
          type="text"
          name='lastname'
          onChange={props.handleChange}
          value={props.lastName.text}
          placeholder='Last Name'
          />
          
          <input 
          type="text"
          onChange={props.handleChange}
          value={props.title.text}
          name='title'
          placeholder='Title'
          />

          <input 
           type="file" 
           name='image'
           onChange={props.handleChange}
          
          />

           <input 
          type="text"
          onChange={props.handleChange}
          value={props.address.text}
          name='address'
          placeholder='Address'
          />

           <input 
          type="text"
          onChange={props.handleChange}
          value={props.phonenumber.text}
          name='phonenumber'
          placeholder='Phone Number'
          />

           <input
          onChange={props.handleChange}
          value={props.email.text}
          type="email"
          name='email'
          placeholder='Email Address'
          />
          <textarea 
          onChange={props.handleChange}
          value={props.description.text}
          name="description"
          placeholder = "Description"
          id="" 
          cols="30" 
          rows="10">
            
          </textarea>
          <br/>
          <button>Edit</button>
          <button type='submit'>Submit</button>
        </form>
        

    </div>
  )
}

export default Personal