import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import React, {useState, useEffect} from 'react';
import {v4 as uuid} from 'uuid';

function App() {
  const LOCAL_STORAGE_KEY="contacts"
  const [contacts, setContacts]=useState([])

  const addContactHandler=(contact)=>{
    setContacts([...contacts, {id:uuid(),...contact}])
  }
  useEffect(()=>{
    const retrieveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if (retrieveContacts && retrieveContacts.length!==0) setContacts(retrieveContacts)
  },[])

  useEffect(()=>{
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])

  const updateContacts=(id)=>{
    const modifiedContacts=contacts.filter((contact)=>{
      return contact.id!==id
    })
    setContacts(modifiedContacts)
  }
  
  return (
    <div className='ui container'>
      <Header></Header>
      <AddContact addContactHandler={addContactHandler}></AddContact>
      <ContactList contacts={contacts} deleteContactHandler={updateContacts} />
    </div>
  );
}

export default App;
