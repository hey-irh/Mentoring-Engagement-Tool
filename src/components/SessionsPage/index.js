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

  // HOW DO WE PATCH

  function handleClick(newNote, id) {
    // WIP need to finish tomorrow 
    // need to find and set index
    let toAdd = [...sessions[index].notes, newNote]
   
    const fetchRequest = useCallback(() => {

      await fetch(`http://localhost:5000/sessions/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id, toAdd}),
      }

  , []);

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
