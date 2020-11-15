import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./Components/Profile/Login";
import Register from "./Components/Profile/Register";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/sign-in" component={Login} />
        <Route exact path="/sign-up" component={Register} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
