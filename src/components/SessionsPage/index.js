import React, { useState, useEffect } from "react";
import SessionBlock from "../SessionBlock";
import "./SessionsPage.css";
import { baseUrl } from "../App";

function SessionsPage({ mentorId, menteeId, userIsMentor }) {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    async function getSessions() {
      const res = await fetch(`${baseUrl}/sessions`);
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

  const now = new Date().toISOString();

  const groupedSessions = sessions.reduce(
    (obj, session) => {
      if (session.timestamp < now) {
        obj.Past.push(session);
      } else {
        obj.Future.push(session);
      }
      return obj;
    },
    { Future: [], Past: [] }
  );

  return (
    <div className="SessionsContainer">
      <h1 className="h1">Sessions</h1>
      {Object.entries(groupedSessions).map(([section, sessions]) => {
        return (
          sessions.length > 0 && (
            <div className="SessionGroup" key={section}>
              <p className="SessionGroup__header">{section} Sessions</p>
              {sessions.map((session) => (
                <SessionBlock
                  userIsMentor={userIsMentor}
                  menteeId={menteeId}
                  mentorId={mentorId}
                  session={session}
                  sessions={sessions}
                  key={session.id}
                  handleClick={handleClick}
                />
              ))}
            </div>
          )
        );
      })}
    </div>
  );
}

export default SessionsPage;
