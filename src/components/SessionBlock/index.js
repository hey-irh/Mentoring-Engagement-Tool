import React, { useState, Fragment } from "react";

function SessionBlock({ session, handleClick, key }) {
  const [newNote, setnewNote] = useState("");
  const [renderTextarea, setrenderTextarea] = useState(false);

  function toggleTextArea() {
    setrenderTextarea(true);
  }

  return (
    <Fragment>
      <p>{session.timestamp}</p>
      <ul>
        {session.notes.map((note) => (
          // is id right? or is it key
          <li id={key}>{note}</li>
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
