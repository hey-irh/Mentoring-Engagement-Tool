import React, { useState, useEffect } from "react";
import "./DeleteButton.css";

export default function DeleteButton({ session }) {
  const [sendDeleteRequest, setSendDeleteRequest] = useState(false);
  const [deleteSuccess, setdeleteSuccess] = useState(false);

  useEffect(() => {
    if (!sendDeleteRequest) {
      return;
    }

    const abortController = new AbortController();

    fetch(`http://localhost:5000/sessions/${session.id}`, {
      method: "DELETE",
      signal: abortController.signal,
    })
      .then((response) => response.json())

      .then(() => {
        setdeleteSuccess(true);
      })

      //.then(() => new Promise((r) => setTimeout(r, 5000)))

      // use for delay if you put the "session was deleted" message back in!

      // .then(() => {
      //   return new Promise((resolve) => {
      //     setTimeout(function () {
      //       setdeleteSuccess(false);
      //       resolve();
      //     }, 500);
      //   });
      // })

      .then((data) => {
        setSendDeleteRequest(false);
      })
      .catch((e) => {
        console.error(e);
        setSendDeleteRequest(false);
      })

      .then(() => {
        document.location.reload();
      });

    return () => abortController.abort();
  }, [sendDeleteRequest]);

  function handleDelete() {
    setSendDeleteRequest(true);
  }

  return (
    <div>
      <button className="deleteButton" onClick={handleDelete}>
        🗑️
      </button>
      {/* {deleteSuccess && (
        <p style={{ position: "absolute", backgroundColor: "white" }}>
          Session Deleted!
        </p> */}
      {/* )} */}
    </div>
  );
}
