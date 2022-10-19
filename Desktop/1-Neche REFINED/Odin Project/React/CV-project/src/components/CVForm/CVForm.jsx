import React, { Component } from 'react'
import uniqid from "uniqid";
import Personal from './Personal';
import Education from './Education'
import Experience from './Experience';
import CVPreview from '../CVPreview/CVPreview';
import './CVForm.css'


export class CVForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      // State for Personal Details
      firstName: {
        text: '',
        id: uniqid()
      },
      lastName : {
        text : '',
        id: uniqid()
      },
      image : {
        text : null,
        id : uniqid()
      },

      title : {
        text : '',
        id: uniqid()
      },

      address : {
        text : '',
        id: uniqid()
      },

      phonenumber : {
        text : '',
        id: uniqid()
      },
      
      email : {
        text : '',
        id: uniqid()
      },

      description : {
        text : '',
        id: uniqid()
      },

      personalDetails: [],

      // Education State Values

      school: {
        text: '',
        id: uniqid()
      },

      city: {
        text: '',
        id: uniqid()
      },

      degree: {
        text: '',
        id: uniqid()
      },

      course: {
        text: '',
        id: uniqid()
      },

      from: {
        text: '',
        id: uniqid()
      },

      to: {
        text: '',
        id: uniqid()
      },
      
      educationDetails: [],

      numrows : {
        numrows : [uniqid()]
      },

      //Experience Form State Values

      position: {
        text: '',
        id: uniqid()
      },

      company: {
        text: '',
        id: uniqid()
      },

      cityex: {
        text: '',
        id: uniqid()
      },

      fromex: {
        text: '',
        id: uniqid()
      },

      toex: {
        text: '',
        id: uniqid()
      },

      experienceDetails: [],

    };
    
    
  }



  //PERSONAL DETAILS FUNCTIONS

  //HandleChange function, for storing any changes on the form
  handleChangePersonal = (e) => {
    if (e.target.name === 'firstname' ){
    this.setState({
      firstName: {
        text: e.target.value,
        id: this.state.firstName.id,
      },
    });
  }

  else if (e.target.name === 'lastname' ){
    this.setState({
      lastName: {
        text: e.target.value,
        id: this.state.lastName.id,
      },
    });
  }

  else if (e.target.name === 'title' ){
    this.setState({
      title: {
        text: e.target.value,
        id: this.state.title.id,
      },
    });
  }

  else if (e.target.name === 'address' ){
    this.setState({
      address: {
        text: e.target.value,
        id: this.state.address.id,
      },
    });
  }

  else if (e.target.name === 'phonenumber' ){
    this.setState({
      phonenumber: {
        text: e.target.value,
        id: this.state.phonenumber.id,
      },
    });
  }

  else if (e.target.name === 'email' ){
    this.setState({
      email: {
        text: e.target.value,
        id: this.state.email.id,
      },
    });
  }

  else if (e.target.name === 'description' ){
    this.setState({
      description: {
        text: e.target.value,
        id: this.state.description.id,
      },
    });
  }

  else if (e.target.name === 'image' ){
    this.setState({
      image: {
        text: URL.createObjectURL(e.target.files[0]),
        id: this.state.image.id,
      },
    });
  }
  };

  //onSubmit function for and collecting stored form details and clearing the form
  onSubmitTaskPersonal = (e) => {
    e.preventDefault();
    this.setState({
      personalDetails: this.state.personalDetails.concat(this.state.firstName, 
                                          this.state.lastName,this.state.title, 
                                          this.state.image, this.state.address,
                                          this.state.phonenumber, this.state.email,
                                          this.state.description
        ),
      firstName: {
        text: '', 
        id: uniqid()
      },
    lastName : {
      text: '',
      id: uniqid()
    },
    title: {
      text: '', 
      id: uniqid()
    },
    address: {
      text: '', 
      id: uniqid()
    },
    phonenumber: {
      text: '', 
      id: uniqid()
    },
    email: {
      text: '', 
      id: uniqid()
    },
    description: {
      text: '', 
      id: uniqid()
    },
    });
  };



  //EDUCATION DETAILS FUNCTIONS
  
  //HandleChange function, for storing any changes on the form
  handleChangeEducation = (e) => {
    if (e.target.name === 'school' ){
    this.setState({
      school: {
        text: e.target.value,
        id: this.state.school.id,
      },
      
    });
  }

  else if (e.target.name === 'city' ){
    this.setState({
      city: {
        text: e.target.value,
        id: this.state.city.id,
      },
    });
  }

  else if (e.target.name === 'degree' ){
    this.setState({
      degree: {
        text: e.target.value,
        id: this.state.degree.id,
      },
    });
  }

  else if (e.target.name === 'course' ){
    this.setState({
      course: {
        text: e.target.value,
        id: this.state.course.id,
      },
    });
  }
  
  else if (e.target.name === 'from' ){
    this.setState({
      from: {
        text: e.target.value,
        id: this.state.from.id,
      },
    });
  }

  else if (e.target.name === 'to' ){
    this.setState({
      to: {
        text: e.target.value,
        id: this.state.to.id,
      },
    });
  }
  };

  //onSubmit function for and collecting stored form details and clearing the form
  onSubmitTaskEducation = (e) => {
    e.preventDefault();
    this.setState({
      educationDetails: this.state.educationDetails.concat(this.state.school, 
                                          this.state.city,this.state.degree,
                                          this.state.course, this.state.from,
                                          this.state.to 
        ),
      school: {
        text: '', 
        id: uniqid()
      },

      city: {
        text: '', 
        id: uniqid()
      },

      degree: {
        text: '', 
        id: uniqid()
      },

      course: {
        text: '', 
        id: uniqid()
      },

      from: {
        text: '', 
        id: uniqid()
      },
      to : {
        text: '',
        id: uniqid()
      }
    });
  };

  //Function for adding New Education Section
  onAddNewEducation = (e) =>{
    e.preventDefault();
    this.setState(
      {
        numrows : {
          numrows : this.state.numrows.numrows.concat(uniqid())
        },
      }
    )
  }

  //Function for removing an Education section
  onRemoveEducation = (key) => {
    // e.preventDefault();
    this.setState(
      {
        numrows : {
          numrows : this.state.numrows.numrows.filter(num => num !== key)
        }
      }
    )
  }


//EXPERIENCE DETAILS FUNCTION
//HandleChange function, for storing any changes on the form
  handleChangeExperience = (e) => {
    if (e.target.name === 'position' ){
    this.setState({
      position: {
        text: e.target.value,
        id: this.state.position.id,
      },
      
    });
  }

  else if (e.target.name === 'company' ){
    this.setState({
      company: {
        text: e.target.value,
        id: this.state.company.id,
      },
    });
  }


  else if (e.target.name === 'cityex' ){
    this.setState({
      cityex: {
        text: e.target.value,
        id: this.state.cityex.id,
      },
    });
  }
  
  else if (e.target.name === 'fromex' ){
    this.setState({
      fromex: {
        text: e.target.value,
        id: this.state.fromex.id,
      },
    });
  }

  else if (e.target.name === 'toex' ){
    this.setState({
      toex: {
        text: e.target.value,
        id: this.state.toex.id,
      },
    });
  }
  };

  //onSubmit function for and collecting stored form details and clearing the form
  onSubmitTaskExperience = (e) => {
    e.preventDefault();
    this.setState({
      experienceDetails: this.state.experienceDetails.concat(this.state.position, 
                                          this.state.company,this.state.cityex,
                                          this.state.fromex, this.state.toex
        ),
      position: {
        text: '', 
        id: uniqid()
      },

      cityex: {
        text: '', 
        id: uniqid()
      },

      company: {
        text: '', 
        id: uniqid()
      },

      fromex: {
        text: '', 
        id: uniqid()
      },
      toex : {
        text: '',
        id: uniqid()
      }
    });
  };


  render() {
    
    return (
      <div>
        
      <Personal
          firstName = {this.state.firstName}
          lastName = {this.state.lastName}
          title = {this.state.title}
          address = {this.state.address}
          phonenumber = {this.state.phonenumber}
          email = {this.state.email}
          description = {this.state.description}
          handleChange = {this.handleChangePersonal}
          onSubmitTask = { this.onSubmitTaskPersonal}
      />
        <h5>Education</h5>
        {this.state.numrows.numrows.map((x)=> <Education 
          key={x}
          myKey = {x}
          school = {this.state.school}
          city = {this.state.city}
          degree = {this.state.degree}
          course = {this.state.course}
          from = {this.state.from}
          to = {this.state.to}
          handleChange = {this.handleChangeEducation}
          onSubmitTask = { this.onSubmitTaskEducation}
          onRemoveEducation = { this.onRemoveEducation}
      />)}

      <h5>Experience</h5>    

      <Experience 
          position = {this.state.position}
          company = {this.state.company}
          cityex = {this.state.cityex}
          fromex = {this.state.fromex}
          toex = {this.state.toex}
          handleChange = {this.handleChangeExperience}
          onSubmitTask = { this.onSubmitTaskExperience}
      />

      <button onClick={this.onAddNewEducation}>Add</button><br/>
      <CVPreview  CVP = {this.state.personalDetails}
                  CVED = {this.state.educationDetails}
                  CVEX = {this.state.experienceDetails}
                  image = {this.state.image.text}
      />
      </div>
    )
  }
}

export default CVForm