import React, { useState, useEffect } from "react";
import "./CreateSession.css";
import { getSyllabusDetailsForTimestamp } from "./syllabus";
import Suggestions from "../Suggestions";

export default function CreateSession() {
  const [timestamp, setTimestamp] = useState("");
  const [note, setNote] = useState("");
  const [sendRequest, setSendRequest] = useState(false);

  const suggestion = getSyllabusDetailsForTimestamp(timestamp);

  useEffect(() => {
    if (!sendRequest) {
      return;
    }

    const abortController = new AbortController();

    fetch("http://localhost:5000/sessions", {
      method: "POST",
      body: JSON.stringify({
        timestamp,
        notes: [note],
        mentorId: 1,
        menteeId: 2,
        mentorFeedback: null,
        menteeFeedback: null,
      }),
      headers: { "Content-Type": "application/json" },
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((data) => {
        setTimestamp("");
        setNote("");
        setSendRequest(false);
      })
      .catch((e) => {
        console.error(e);
        setSendRequest(false);
      });

    return () => abortController.abort();
  }, [sendRequest]);

  return (
    <div className="CreateSession">
      <Suggestions suggestion={suggestion} />
      <div className="CreateSession__input-container">
        <label className="form-item">
          <span className="form-label">Book a session</span>
          <input
            type="datetime-local"
            value={timestamp.slice(0, -1)}
            onChange={(e) =>
              setTimestamp(new Date(e.target.value).toISOString())
            }
            readOnly={sendRequest}
          />
        </label>
        <label className="form-item">
          <span className="form-label">Add an initial note</span>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Enter a note here..."
            readOnly={sendRequest}
          ></textarea>
        </label>
      </div>
      <button disabled={sendRequest} onClick={() => setSendRequest(true)}>
        Create new session
      </button>
    </div>
  );
}
