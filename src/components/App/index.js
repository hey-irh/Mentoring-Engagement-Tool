import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SessionsPage from "../SessionsPage";
import CreateSession from "../CreateSession";

function App() {
  return (
    <div className="App">
      <SessionsPage />
      <CreateSession />
    </div>
  );
}

export default App;
