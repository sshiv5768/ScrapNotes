import { Button } from "grommet";
import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleClick = (event) => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <>
      <div className="note new">
        <textarea
          rows="8"
          cols="10"
          placeholder="Add Something Here.."
          value={noteText}
          onChange={handleChange}
        ></textarea>
        <div className="note-footer">
          <small>200 Remaining</small>
          <Button label="Save" className="save" onClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default AddNote;
