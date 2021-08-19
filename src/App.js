import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Product from "./Product";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateUser from "./CreateUser";
function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Switch>
                <Route path="/" component={Dashboard} exact="true" />
                <Route path="/user" component={Users} exact="true" />
                <Route path="/product" component={Product} exact="true" />
                <Route
                  path="/create-user"
                  component={CreateUser}
                  exact={true}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
