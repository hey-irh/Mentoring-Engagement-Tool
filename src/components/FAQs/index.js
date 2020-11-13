import React from "react";
import "./FAQs.css";

export default function FAQs({ userIsMentor }) {
  return (
    <div className="FAQsContainer">
      <h1 className="h1">FAQs</h1>

      <div className="questionsContainer">
        <h2>FAQs about the mentee/mentor relationship</h2>
        <h3>Why do we have mentors?</h3>

        <p>
          School of Code provides you a personal mentor so that you have an
          extra node in your support network when on the course.
        </p>

        <h3>How should I contact my mentor?</h3>

        <p>
          We will provide an email for your mentor and then from there you can
          decide to talk on other channels such as slack if you so wish.
        </p>

        <h3>What can I ask my mentor?</h3>

        <p>
          Anything within reason! Your mentors are a great source of knowledge
          when it comes to code and careers.
        </p>

        <h3>How do school of code pick mentors?</h3>

        <p>
          We vet mentors to make sure they will be as helpful as possible to
          someone starting out in the coding world.
        </p>

        <h3>Have all mentors been on the School Of Code course?</h3>

        <p>
          A lot have but others haven't. Even if your mentor hasn't been on
          course, they will still have a breadth of experience within the realm
          of tech.
        </p>
      </div>

      {!userIsMentor && (
        <div className="" id="qs-to-ask-mentor">
          <h2>Questions to ask your mentor</h2>
          <h3>How did you learn to code?</h3>
          <h3>What languages do you use?</h3>
          <h3>How many years have you been in tech?</h3>
          <h3>Did you complete the School of Code course too?</h3>
          <h3>What advice would you give me as a beginner?</h3>
          <h3>What is your day to day like at your job?</h3>
        </div>
      )}
      {userIsMentor && (
        <div className="questionsContainer" id="qs-to-ask-mentee">
          <h2>Questions to ask your mentee</h2>
          <h3>How are you finding the course so far?</h3>
          <h3>What projects have you been doing?</h3>
          <h3>What areas of coding do you find most interesting?</h3>
          <h3>What do you enjoy doing in your spare time?</h3>
          <h3>Do you need help with anything on the course?</h3>
          <h3>What did you do before you started the course?</h3>
        </div>
      )}
    </div>
  );
}
