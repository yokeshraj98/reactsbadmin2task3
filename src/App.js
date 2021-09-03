import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Product from "./Product";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import { UserProvider } from "./UserContext";
import ProductCreate from "./product-create";
import ProductEdit from "./ProductEdit"
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
                <Route path="/product" component={Product} exact="true" />
                <Route
                  path="/product-create"
                  component={ProductCreate}
                  exact="true"
                />
                   <Route
                  path="/product/edit/:id"
                  component={ProductEdit}
                  exact="true"
                />
               
                <UserProvider>
                  <Route path="/user" component={Users} exact="true" />

                  <Route
                    path="/user/edit/:id"
                    component={EditUser}
                    exact="true"
                  />
                  <Route
                    path="/create-user"
                    component={CreateUser}
                    exact={true}
                  />
                </UserProvider>
                
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
