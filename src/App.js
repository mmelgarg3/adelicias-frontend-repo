import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import AdminDashboard from "./components/admin-dash";
import WaiterDashboard from "./components/WaiterDashboard";
import CookDashboard from "./components/CookDashboard";
import Orders from "./components/user-components/Orders";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/dashboard">
          <Navbar/>
          <Dashboard/>
        </Route>
	<Route path="/admin-dash">
	  <Navbar />
	  <AdminDashboard />
	</Route>
	<Route path="/waiter-dash">
	  <Navbar />
	  <WaiterDashboard />
	</Route>
	<Route path="/cook-dash">
	  <Navbar />
	  <CookDashboard />
	</Route>
	<Route path="/orders">
	  <Navbar />
	  <Orders />
	</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
