import React from "react";
import ContactCard from "./ContactCard";

const ContactList=(props)=>{
    const deleteContact=(id)=>{
        props.deleteContactHandler(id)
    }
    const renderContactList=props.contacts.map((contact)=>{
        return (
            <ContactCard key={contact.id} contact={contact} clickHandler={deleteContact}/>
        )
    })
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactList;