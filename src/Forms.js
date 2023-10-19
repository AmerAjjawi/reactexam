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
    const value = e.target.value; 
    this.setState(
        { [name]: value },
         () => {
        this.fieldValidation(name, value);
          }
        );
      }
 
fieldValidation = (fieldName, value) => {
    let fieldValidationError = this.state.FormErrors;
    let isEmailValid = this.state.isEmailValid;
    let isPasswordValid = this.state.isPasswordValid;


    switch (fieldName) {
        case 'email':
            isEmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
            fieldValidationError.email = isEmailValid ? '' : 'is invalid';
        break;
        case 'password':
            isPasswordValid = value.length >= 4;
            fieldValidationError.password = isPasswordValid ? ' ': 'is too short';
        break;
        case 'description':
            isDescriptionValid = value.trim().length > 0
            fieldValidationError.description = isDescriptionValid ? ' ': 'is mandatory';
        break;
        case 'category':
            const numberOfCategories = ['category1', 'category2', 'category3'];
            isNumberOfCategoriesValid = valid.category.includes(value);
        break;
        case 'quantity':
            isQuatityValueValid = !isNaN(value) && parseFloat(value) < 1000;
            fieldValidationError.quantity = isQuatityValueValid ? ' ' : 'should be less than 1000 items'
    }
}
    