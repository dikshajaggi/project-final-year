import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MyOrders from "./pages/MyOrders";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllOrders from "./pages/AllOrders";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/myOrders" exact component={MyOrders} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/allOrders" exact component={AllOrders} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
