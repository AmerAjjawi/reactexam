import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './index.css';

class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: 'Please, enter your name',
            email: 'Please, enter your email',
            password: 'Please, enter your password',
            FormErrors: {email: '', password: ''},
            isEmailValid: false,
            isPasswordValid: false,
            formValid: false,
            description: 'Please, enter the product',
            category: 'Please, enter your category',
            quantity: 'Please, enter the quantity you want'

        }
    }

    inputValidation = (e) => {
        const name = e.target.name;
        const value = e.target.value; // Change "name" to "value"
        this.setState(
          { [name]: value },
          () => {
            this.fieldValidation(name, value);
          }
        );
      }
    