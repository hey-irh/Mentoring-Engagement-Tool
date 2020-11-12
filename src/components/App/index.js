import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SessionsPage from "../SessionsPage";
import CreateSession from "../CreateSession";
import { useState } from "react";
import Contact from "../Contact";
import FAQs from "../FAQs";

function App() {
  const [mentorId, setMentorId] = useState(1);
  const [menteeId, setMenteeId] = useState(2);
  const [userIsMentor, setUserIsMentor] = useState(true);

  return (
    <Router>
      <div>
        <nav className="nav">
          <Link to="/">
            <img
              className="createSessionLink"
              src="/static/images/SoC_logo.png"
            ></img>
          </Link>
          <Link to="/faqs">
            <button className="createSessionLink">FAQs</button>
          </Link>
          <Link to="/contact">
            <button className="createSessionLink">Contact us</button>
          </Link>
          <Link to="/createsession">
            <button className="createSessionLink">Create Session</button>
          </Link>
          <Link to="/">
            <button className="createSessionLink">Home</button>
          </Link>
        </nav>
        <Switch>
          <Route path="/createsession">
            <CreateSession mentorId={mentorId} menteeId={menteeId} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/faqs">
            <FAQs userIsMentor={userIsMentor} />
          </Route>
          <Route path="/">
            <SessionsPage
              mentorId={mentorId}
              menteeId={menteeId}
              userIsMentor={userIsMentor}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// <div className="App">

//     <SessionsPage />
//     <CreateSession />
//   </div>
