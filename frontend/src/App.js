import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductScreen from "./pages/ProductScreen";
import CartScreen from "./pages/CartScreen";
import MenuScreen from "./pages/MenuScreen";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";
import { useState } from "react";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <div className="App">
      <Router>
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route exact path="/menu" component={MenuScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
