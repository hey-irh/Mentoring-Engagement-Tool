import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SessionsPage from "../SessionsPage";
import CreateSession from "../CreateSession";

function App() {



  return (

    <Router>

      <div>
      <nav>
      <Link to="/">
        <img width = "100px" height = "auto" src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"></img>
        </Link>
        </nav>
        <Switch>
          <Route path="/createsession">
            <CreateSession />
          </Route>
          <Route path="/">
            <SessionsPage />
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