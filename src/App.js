
//created by Amer Ajjawi
//Student number 301319092
import React, { Component } from 'react';
import './App.css';
import Form from './Forms';
import { FormErrors } from './FormErrors';
import school from './school.png'; 

class App extends Component {
  render() {
    return (
      <div className="myApp">
        <div className="appHeader">
          <img src={school} className="myapp-logo" alt="logo" /> {/* Use the imported image */}
          <h2>New Product</h2>
        </div>
        <Form />
      </div>
    );
  }
}

export default App;