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
              width="100px"
              height="auto"
              src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
            ></img>
          </Link>
          <Link to="/createsession">
            <button className="createSessionLink">Create Session</button>
          </Link>
          <Link to="/contact">
            <button className="createSessionLink">Contact us</button>
          </Link>
          <Link to="/faqs">
            <button className="createSessionLink">FAQs</button>
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
            <FAQs />
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
