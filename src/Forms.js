import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './index.css';

class Form extends Component {
  constructor(props) {
    super(props);
    // Changing defaults to empty strings
    this.state = {
      name: '',
      email: '',
      password: '',
      FormErrors: {
        name: '',
        email: '',
        password: '',
        description: '',
        category: '',
        quantity: '',
        price: '',
      },
      isEmailValid: false,
      isPasswordValid: false,
      isDescriptionValid: false,
      isCategoryValid: false,
      isQuantityValid: false,
      formValid: false,
      description: '',
      category: '',
      quantity: '',
      price: '',
    };
  }

  inputValidation = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.fieldValidation(name, value);
    });
  };

  fieldValidation = (fieldName, value) => {
    let fieldValidationErrors = this.state.FormErrors;
    let isEmailValid = this.state.isEmailValid;
    let isPasswordValid = this.state.isPasswordValid;
    let isDescriptionValid = this.state.isDescriptionValid;
    let isCategoryValid = this.state.isCategoryValid;
    let isQuantityValid = this.state.isQuantityValid;
    let isPriceValid = this.state.isPriceValid;

    switch (fieldName) {
      case 'email':
        isEmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = isEmailValid ? '' : ' is invalid';
        break;
      case 'password':
        isPasswordValid = value.length >= 4;
        fieldValidationErrors.password = isPasswordValid ? '' : ' is too short';
        break;
      case 'description':
        isDescriptionValid = value.trim().length > 0;
        fieldValidationErrors.description = isDescriptionValid ? '' : ' is mandatory';
        break;
      case 'category':
        const validCategories = ['category1', 'category2', 'category3'];
        isCategoryValid = validCategories.includes(value);
        fieldValidationErrors.category = isCategoryValid ? '' : ' is invalid';
        break;
      case 'quantity':
        isQuantityValid = !isNaN(value) && parseFloat(value) < 1000;
        fieldValidationErrors.quantity = isQuantityValid ? '' : ' should be less than 1000 items';
        break;
      case 'price':
        isPriceValid = !isNaN(value) && parseFloat(value) > 200;
        fieldValidationErrors.price = isPriceValid ? '' : ' should be more than 200 dollars';
        break;
      default:
        break;
    }

    this.setState(
      {
        FormErrors: fieldValidationErrors,
        isEmailValid,
        isPasswordValid,
        isDescriptionValid,
        isCategoryValid,
        isQuantityValid,
        isPriceValid,
      },
      this.validateForm
    );
  };

  validateForm = () => {
    const {
      isEmailValid,
      isPasswordValid,
      isDescriptionValid,
      isCategoryValid,
      isQuantityValid,
      isPriceValid,
    } = this.state;

    this.setState({
      formValid:
        isEmailValid &&
        isPasswordValid &&
        isDescriptionValid &&
        isCategoryValid &&
        isQuantityValid &&
        isPriceValid,
    });
  };

  errorClass = (error) => (error.length === 0 ? '' : 'has-error');

  handleCancel = () => {
    // Reset form fields to their initial or default values
    this.setState({
      name: '',
      email: '',
      password: '',
      description: '',
      category: '',
      quantity: '',
      price: '',
      FormErrors: {
        email: '',
        password: '',
        description: '',
        category: '',
        quantity: '',
        price: '',
      },
      formValid: false,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.formValid) {
      // Create an object to hold the form data
      const formData = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        description: this.state.description,
        category: this.state.category,
        quantity: this.state.quantity,
        price: this.state.price,
      };

      // Display the information submitted
      console.log('Form data submitted:', formData);

      // Reset the form
      this.handleCancel();
    } else {
      console.log('Form is not valid');
    }
  };

  render() {
    return (
      <form className="myform" onSubmit={this.handleSubmit}>
        <h3>New Product</h3>
        <div className="h3product">
          <FormErrors formErrors={this.state.FormErrors} />
        </div>
        <div className={this.errorClass(this.state.FormErrors.email)}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            required
            className="form"
            name="email"
            placeholder="ajjawi@gmail.com"
            value={this.state.email}
            onChange={this.inputValidation}
          />
        </div>

        <div className={this.errorClass(this.state.FormErrors.name)}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            className="form"
            name="name"
            placeholder="john smith"
            value={this.state.name}
            onChange={this.inputValidation}
          />
        </div>

        <div className={this.errorClass(this.state.FormErrors.password)}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            className="form"
            name="password"
            placeholder="2330293273"
            value={this.state.password}
            onChange={this.inputValidation}
          />
        </div>

        <div className={this.errorClass(this.state.FormErrors.description)}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            required
            className="form"
            name="description"
            placeholder="Iphone 15 Max Pro"
            value={this.state.description}
            onChange={this.inputValidation}
          />
        </div>

        <div className={this.errorClass(this.state.FormErrors.category)}>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            required
            className="form"
            name="category"
            placeholder="Phones"
            value={this.state.category}
            onChange={this.inputValidation}
          />
        </div>

        <div className={this.errorClass(this.state.FormErrors.quantity)}>
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            required
            className="form"
            name="quantity"
            placeholder="1"
            value={this.state.quantity}
            onChange={this.inputValidation}
          />
        </div>

        <div className={this.errorClass(this.state.FormErrors.price)}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            required
            className="form"
            name="price"
            placeholder="200"
            value={this.state.price}
            onChange={this.inputValidation}
          />
        </div>
        <div class="form-buttons">
          <button type="submit" disabled={!this.state.formValid}>Submit</button>
          <button type="button" onClick={this.handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
