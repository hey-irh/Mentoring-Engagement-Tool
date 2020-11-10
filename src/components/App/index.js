import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SessionsPage from "../SessionsPage"

function App() {
  return (
    <div className="App">
      <SessionsPage />
    </div>
  );
}

export default App;
