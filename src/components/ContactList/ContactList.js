import React from 'react';
import ContactItem from '../ContactItem/ContactItem'

function ContactList() {

  const state = {
    contacts: [
      {
        "id": 1,
        "name": "Leanne Graham",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
      
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
  
      },
    ]
  }


return (
  state.contacts.map((el) => (
    <ContactItem key={el.id} name={el.name}/>
  )))
  }
  
  export default ContactList