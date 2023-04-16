import Home from "./pages/home/Home";
import About from "./pages/about/about";
import Main from "./pages/main/main";
import Login from "./pages/loggi/login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/reggi/register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>

      <Route exact path="/">
          {user ? <Home /> : <Main />}
        </Route>
        <Route exact path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
        <Route path="/about">
          <About />
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
