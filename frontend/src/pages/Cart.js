import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarCart from "../components/NavbarCart";
import OrderedPizza from "../components/OrderedPizza";
import "../styles/Cart.css";

const Cart = () => {
  return (
    <div>
      <NavbarCart />
      <OrderedPizza />
      <div className="orderNow">
        <Button variant="secondary">
          <Link to="/allOrders" className="orderNowBtn">
            Order Now
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Cart;
