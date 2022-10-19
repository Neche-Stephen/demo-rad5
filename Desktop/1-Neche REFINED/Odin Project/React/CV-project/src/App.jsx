import React, { Component } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import CVForm from './components/CVForm/CVForm'
import './App.css'

export class App extends Component {
//   constructor(props){
//       super(props);
//       this.state = {
//         file : ''
//       }
//   }


//   handleChange(e) {
//     console.log(e.target.files);
//     this.setState({
//       file : URL.createObjectURL(e.target.files[0])
//     })
// }




  render() {
    return (
      <div>
        <Header />
        <CVForm />
        <Footer />
          {/* <h2>Add Image:</h2>
            <input type="file" onChange={this.handleChange.bind(this)} />
            <img src={this.state.file} />
            {console.log(this.state.file)} */}

      </div>
    )
  }
}

export default App