import React, { useState, Fragment, useEffect } from "react";
import "./SessionBlock.css";

function SessionBlock({ session, handleClick }) {
  const [newNote, setnewNote] = useState("");
  const [renderTextarea, setrenderTextarea] = useState(false);
  const [sendRequest, setSendRequest] = useState(false);

  function toggleTextArea() {
    setrenderTextarea(true);
  }

  useEffect(() => {
    if (!sendRequest) {
      return;
    }

    const abortController = new AbortController();

    fetch(`http://localhost:5000/sessions/${session.id}`, {
      method: "PATCH",
      body: JSON.stringify([...session.notes]),
      headers: { "Content-Type": "application/json" },
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((data) => {
        setnewNote("");
        setSendRequest(false);
      })
      .catch((e) => {
        console.error(e);
        setSendRequest(false);
      });

    return () => abortController.abort();
  }, [sendRequest]);

  return (
    <div className="Session">
      <p>{`Date: ` + session.timestamp.substring(0, 10)}</p>
      <p> {`Time: ` + session.timestamp.substring(11, 16)}</p>
      <ul>
        {session.notes.map((note, i) => (
          <li key={i}>{note}</li>
        ))}
      </ul>
      <button onClick={toggleTextArea}>Add Note</button>
      {renderTextarea && (
        <Fragment>
          <textarea
            onChange={(event) => setnewNote(event.target.value)}
          ></textarea>
          <button
            onClick={() => {
              setSendRequest(true);
              handleClick(session.id, newNote);
              setrenderTextarea(false);
            }}
          >
            Add Note
          </button>
        </Fragment>
      )}
    </div>
  );
}

export default SessionBlock;
