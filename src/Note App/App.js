import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import style from "./style.css";
import notes from "./notes";
function noteTerm(noteE) {
  return <Note key={noteE.key} title={noteE.title} content={noteE.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(noteTerm)}
      <Footer />
    </div>
  );
}

export default App;
