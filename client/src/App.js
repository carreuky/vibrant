import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Events from "./Components/Events";
import Footer from "./Components/Footer";
import Userpage from "./Components/Userpage";
import NewEvent from "./Components/NewEvent";

function App() {
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      {user ? (
        <Switch>
          <Route path="/">
            <Userpage user={user} />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      )}

      <Footer />
    </div>
  );
}

export default App;
