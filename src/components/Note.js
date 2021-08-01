import { Button } from "grommet";
const Note = ({ id, text, date, handleDelete }) => {
  return (
    <>
      <div className="note">
        <span>{text}</span>
        <div className="note-footer">
          <small>{date}</small>
          <Button
            label="Delete"
            onClick={() => {
              handleDelete(id);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Note;
