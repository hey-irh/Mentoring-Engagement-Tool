import React, { useState, Fragment } from "react";

function SessionBlock({ session, handleClick }) {
  const [newNote, setnewNote] = useState("");
  const [renderTextarea, setrenderTextarea] = useState(false);

  function toggleTextArea() {
    setrenderTextarea(true);
  }

  return (
    <Fragment>
      <p>{session.timestamp}</p>
      <ul>
        {session.notes.map((note, i) => (
          // is id right? or is it key
          <li key={i}>{note}</li>
        ))}
      </ul>
      <button onClick={toggleTextArea}>+</button>
      {renderTextarea && (
        <Fragment>
          <textarea
            onChange={(event) => setnewNote(event.target.value)}
          ></textarea>
          <button onClick={() => handleClick(newNote, session.id)}>
            Add Note
          </button>
        </Fragment>
      )}
    </Fragment>
  );
}

export default SessionBlock;
