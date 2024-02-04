import React from "react";
import Card from "./Card";
import contacts from "./contacts";
import style from "./style.css";
import Avatar from "./Avatar";

function createCard(contacts) {
  return (
    <Card
      key={contacts.id}
      name={contacts.name}
      img={contacts.imgURL}
      tel={contacts.phone}
      email={contacts.email}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQOkNCUqIIdu45eF0N3w4tRQJk94llJBpbDKWGn2dZHQ&s" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
