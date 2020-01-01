import React, { Component } from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";
import "bootstrap/dist/css/bootstrap.min.css";
import EditContact from "./components/contacts/EditContact";

import { Provider } from "./context";
import "./App.css";
//import EditContact from "./components/contacts/EditContact";
//import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contacts Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

// import React from "react";
// import "./App.css";

// function App() {
//   /*
//   return React.createElement(
//     "div",
//     { className: "App" },
//     React.createElement("h1", null, "The App Component!")
//   );*/
//   const name = "Ankit";
//   return (
//     <div className="App">
//       <h1>The App Component</h1>
//       <h2>hello {name}</h2>
//     </div>
//   );
// }

// export default App;
