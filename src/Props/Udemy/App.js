import React from "react";
import contact from "./contact";
import Card from "./Card";
const App = () => {
  console.log(contact);
  return (
    <div>
      <Card
        name={contact[0].name}
        age={contact[0].age}
        mobile={contact[0].mobile}
      />
      <Card
        name={contact[1].name}
        age={contact[1].age}
        mobile={contact[1].mobile}
      />
      <Card
        name={contact[2].name}
        age={contact[2].age}
        mobile={contact[2].mobile}
      />
    </div>
  );
};

export default App;
