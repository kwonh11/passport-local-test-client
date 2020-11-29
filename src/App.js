import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./component/SignIn";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/main">main</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
