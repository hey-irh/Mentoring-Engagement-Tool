import React, { useState, useEffect } from "react";
import { baseUrl } from "../App";

function Feedback({ userIsMentor, session }) {
  const [newFeedback, setNewFeedback] = useState(null);
  const [sendFeedbackRequest, setSendFeedbackRequest] = useState(false);
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);

  const property = userIsMentor ? "mentorFeedback" : "menteeFeedback";

  useEffect(() => {
    if (!sendFeedbackRequest) {
      return;
    }

    const abortController = new AbortController();

    fetch(`${baseUrl}/sessions/${session.id}`, {
      method: "PATCH",
      body: JSON.stringify({ [property]: newFeedback }),
      headers: { "Content-Type": "application/json" },
      signal: abortController.signal,
    })
      .then((response) => response.json())

      .then(() => {
        setFeedbackSuccess(true);
      })

      .then(() => {
        setTimeout(function () {
          setFeedbackSuccess(false);
        }, 2000);
      })

      .then((data) => {
        setSendFeedbackRequest(false);
      })
      .catch((e) => {
        console.error(e);
        setSendFeedbackRequest(false);
      });

    return () => abortController.abort();
  }, [sendFeedbackRequest]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleFeedback(num) {
    setNewFeedback(num);
    setSendFeedbackRequest(true);
  }

  return (
    <div className="feedback">
      <span className="context-info"> Not good </span>
      <button className="button" onClick={() => handleFeedback(1)}>
        1
      </button>
      <button className="button" onClick={() => handleFeedback(2)}>
        2
      </button>
      <button className="button" onClick={() => handleFeedback(3)}>
        3
      </button>
      <button className="button" onClick={() => handleFeedback(4)}>
        4
      </button>
      <button className="button" onClick={() => handleFeedback(5)}>
        5
      </button>
      <span className="context-info"> Great</span>
      {feedbackSuccess && <p>Thanks for the feedback!</p>}
    </div>
  );
}

export default Feedback;
