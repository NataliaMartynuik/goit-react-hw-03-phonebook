import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import Form from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Title, TitleContact } from './App.styled';





export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)

    this.setState({ contacts: parsedContacts})
  }
    
  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,

    }

    contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
    }
  
   
  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId)
    }))
  }

  changeFilter = event => {
    this.setState({filter: event.currentTarget.value})
  }
  
  getVisibleContacts = () => {
     const { contacts, filter } = this.state
     const normalizedFilter = filter.toLowerCase()
     return contacts.filter(contact =>
     contact.name.toLowerCase().includes(normalizedFilter))
  }



   render() {
     const { filter } = this.state
     
     const visibleContacts = this.getVisibleContacts()
     return (
     
    <Container>
        <Title>Phonebook</Title>
        <Form onSubmit={this.addContact} /> 

        <TitleContact>Contacts</TitleContact>
         
        <Filter value={filter} onChange={this.changeFilter} />
        
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContacts} />
    </Container>
    
      
    
    )
  }
};

