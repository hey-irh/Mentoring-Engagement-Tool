import React from "react";

function DeleteButton({ session }) {
  const [newFeedback, setNewFeedback] = useState(null);
  const [sendDeleteRequest, setSendDeleteRequest] = useState(false);
  const [deleteSuccess, setdeleteSuccess] = useState(false);

  const property = userIsMentor ? "mentorFeedback" : "menteeFeedback";

  useEffect(() => {
    if (!sendDeleteRequest) {
      return;
    }

    const abortController = new AbortController();

    fetch(`http://localhost:5000/sessions/${session.id}`, {
      method: "PATCH",
      body: JSON.stringify({ [property]: newFeedback }),
      headers: { "Content-Type": "application/json" },
      signal: abortController.signal,
    })
      .then((response) => response.json())

      .then(() => {
        setdeleteSuccess(true);
      })

      .then(() => {
        setTimeout(function () {
          setdeleteSuccess(false);
        }, 2000);
      })

      .then((data) => {
        setSendDeleteRequest(false);
      })
      .catch((e) => {
        console.error(e);
        setSendDeleteRequest(false);
      });

    return () => abortController.abort();
  }, [sendDeleteRequest]);

  function handleFeedback(num) {
    setNewFeedback(num);
    setSendDeleteRequest(true);
  }

  return (
    <div>
      <button></button>
      {feedbackSuccess && <p>Session Deleted!</p>}
    </div>
  );
}
