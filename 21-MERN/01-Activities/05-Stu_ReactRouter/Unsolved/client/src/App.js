import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <BrowserRouter>
    <div>
      <Nav />
      <ul>
          <li>
            <Books to="/">Books</Books>
          </li>
          <li>
            <Books to="/books">Books</Books>
          </li>
          <li>
            <Detail to="/detail">Detail</Detail>
          </li>
          <li>
            <NoMatch to="/NoMatch">Detail</NoMatch>
          </li>
        </ul>

        <hr />
        
        {/* <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch> */}
      <Books />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
