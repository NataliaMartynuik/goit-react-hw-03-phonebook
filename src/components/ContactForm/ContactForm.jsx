import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ContactForm, ContactLabel, ContactInput, ContactButton } from './ContactForm.styled';

export default class Form extends Component {
 state = {
    name: '',
    number: '',
    };

    nameInputId = nanoid();
    numberInputId = nanoid();

    handleChange = event => {
        const { name, value } = event.currentTarget;

        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state)
        this.reset();
    };

    reset = () => {
        this.setState({name: '', number: ''})
    }

    render() {
        return (
           <ContactForm onSubmit={this.handleSubmit}>
          <ContactLabel htmlFor={this.nameInputId}>
            Name
          </ContactLabel>
          <ContactInput
  type="text"
  name="name"
  value={this.state.name}
  onChange={this.handleChange}                  
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  id={this.nameInputId}                  
          />
       <ContactLabel htmlFor={this.numberInputId}>
            Number
          </ContactLabel>    
         <ContactInput
  type="tel"
  name="number"
  value={this.state.number}
  onChange={this.handleChange}                  
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  id={this.numberInputId}
                />
  <ContactButton type="submit">Add contact</ContactButton>
                
      </ContactForm>  
        )
    }


}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};