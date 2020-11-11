import React, { useState, useEffect, Fragment } from "react";
import SessionBlock from "../SessionBlock";

function SessionsPage() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    async function getSessions() {
      const res = await fetch(`http://localhost:5000/sessions`);
      const { payload } = await res.json();
      console.log(`this is res`, res);
      console.log(`this is payload`, payload);
      setSessions(payload);
    }
    getSessions();
  }, []);

  function handleClick(id, newNote) {
    const indexToUpdate = sessions.findIndex((session) => id === session.id);
    const sessionToUpdate = sessions[indexToUpdate];
    const updatedSession = {
      ...sessionToUpdate,
      notes: [...sessionToUpdate.notes, newNote],
    };
    setSessions([
      ...sessions.slice(0, indexToUpdate).map((session) => {
        return {
          ...session,
          notes: [...session.notes],
        };
      }),
      updatedSession,
      ...sessions.slice(indexToUpdate + 1).map((session) => {
        return {
          ...session,
          notes: [...session.notes],
        };
      }),
    ]);
  }

  return (
    <Fragment>
      <h1>Sessions</h1>
      {/* <Link to="/CreateSession"> */}
      <button>Create Session</button>
      {/* </Link> */}
      {sessions.map((session) => (
        <SessionBlock
          session={session}
          key={session.id}
          handleClick={handleClick}
        />
      ))}
    </Fragment>
  );
}

export default SessionsPage;
