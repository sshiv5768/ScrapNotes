import React from "react";
import { Text, Button, TextInput } from "grommet";
import Note from "./Note";
import AddNote from "./AddNote";

const NoteList = ({ notes, handleAddNote, handleDelete }) => {
  return (
    <>
      <div className="note-list">
        {notes.map((note) => (
          <Note
            id={note.id}
            text={note.text}
            date={note.date}
            handleDelete={handleDelete}
          />
        ))}
        <AddNote handleAddNote={handleAddNote} />
      </div>
    </>
  );
};

export default NoteList;
