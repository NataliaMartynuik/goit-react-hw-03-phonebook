import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import Form from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Title, TitleContact } from './App.styled';


export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  
  }
  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    if (contacts) {const parsedContacts = JSON.parse(contacts)
    this.setState({ contacts: parsedContacts})}
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
     return contacts.filter(({ name })=>
     name.toLowerCase().includes(normalizedFilter))
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

