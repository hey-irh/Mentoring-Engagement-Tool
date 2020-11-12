import React, { useState, useEffect } from "react";

function FAQs({ userIsMentor }) {
  return (
    <div className="FAQsContainer">
      <h1>FAQs</h1>

      {!userIsMentor && (
        <div className="" id="qs-to-ask-mentor">
          <h2>Questions to ask your mentor</h2>
          <p>How did you learn to code?</p>
          <p>What languages do you use?</p>
          <p>How many years have you been in tech?</p>
          <p>Did you complete the School of Code course too?</p>
          <p>What advice would you give me as a beginner?</p>
          <p>What is your day to day like at your job?</p>
        </div>
      )}
      {userIsMentor && (
        <div className="" id="qs-to-ask-mentee">
          <h2>Questions to ask your mentee</h2>
          <p>How are you finding the course so far?</p>
          <p>What projects have you been doing?</p>
          <p>What areas of coding do you find most interesting?</p>
          <p>What do you enjoy doing in your spare time?</p>
          <p>Do you need help with anything on the course?</p>
          <p>What did you do before you started the course?</p>
        </div>
      )}
    </div>
  );
}
