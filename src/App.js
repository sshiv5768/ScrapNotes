import React, { useState } from "react";
import { nanoid } from "nanoid";
import Navbar from "./components/Nav";
import NoteList from "./components/NoteList";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First Note",
      date: "1/08/2021",
    },
    {
      id: nanoid(),
      text: "Second Note",
      date: "1/08/2021",
    },
    {
      id: nanoid(),
      text: "Third Note",
      date: "1/08/2021",
    },
    {
      id: nanoid(),
      text: "Forth Note",
      date: "1/08/2021",
    },
  ]);

  const addnote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <NoteList
          notes={notes}
          handleAddNote={addnote}
          handleDelete={deleteNote}
        />
      </div>
    </>
  );
};

export default App;
