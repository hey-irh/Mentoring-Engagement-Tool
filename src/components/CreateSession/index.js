import React, { useState, useEffect } from "react";
import "./CreateSession.css";
import { getSyllabusDetailsForTimestamp } from "./syllabus";
import Suggestions from "../Suggestions";

export default function CreateSession({ mentorId, menteeId, userIsMentor }) {
  const [timestamp, setTimestamp] = useState("");
  const [note, setNote] = useState("");
  const [sendRequest, setSendRequest] = useState(false);
  const [fetchSuccess, setFetchSuccess] = useState(false);

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
        mentorId,
        menteeId,
        mentorFeedback: null,
        menteeFeedback: null,
      }),
      headers: { "Content-Type": "application/json" },
      signal: abortController.signal,
    })
      .then((response) => response.json())

      .then(() => {
        setFetchSuccess(true);
      })

      .then(() => {
        setTimeout(function () {
          setFetchSuccess(false);
        }, 1500);
      })

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
    <div data-testid="createSession" className="background">
      <div className="CreateSessionContainer">
        <img
          className="syllabus"
          src="/static/images/syllabus.png"
          alt="syllabus"
        />
        <div className="CreateSession__input-container">
          <h1 className="h1">New session</h1>
          <div className="CreateSession__inputs flex-col">
            <label className="form-item">
              <span className="form-label">Book a session</span>
              <input
                className="form-input"
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
                className="form-input"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Enter a note here..."
                readOnly={sendRequest}
              ></textarea>
            </label>
          </div>

          <button
            className="form-submit"
            disabled={sendRequest}
            onClick={() => setSendRequest(true)}
          >
            Submit
          </button>

          {fetchSuccess && <p>Session Created Successfully!</p>}

          <Suggestions suggestion={suggestion} />
        </div>
      </div>
    </div>
  );
}
