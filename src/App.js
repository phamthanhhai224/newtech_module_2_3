import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./Components/Profile/Login";
import Register from "./Components/Profile/Register";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import RequestAndReceive from "./Components/Profile/RequestAndReceive";
import ForgetPassword from "./Components/ForgetPassword";
import ChangePassword from "./Components/Profile/ChangePassword";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/sign-in" component={Login} />
        <Route exact path="/sign-up" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/forgetpassword" component={ForgetPassword} />
        <Route exact path="/changepassword" component={ChangePassword} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
