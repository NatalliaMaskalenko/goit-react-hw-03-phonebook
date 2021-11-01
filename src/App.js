import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';


class App extends Component{
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter:'',
}
  
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  
  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    }
    
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normolizedFitres = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizedFitres),
    );    
  };

    
  render() {
    const {filter} = this.state;
    const { addContact, deleteContact, changeFilter} = this;
    const visibleContacts = this.getVisibleContacts();
        
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter  value={filter} onChange={changeFilter}/>
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={deleteContact} />
      </div>
   );
 }

}

export default App;
