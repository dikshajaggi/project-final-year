import React from "react";
import { Table } from "react-bootstrap";
import NavbarCart from "../components/NavbarCart";
import "../styles/MyOrders.css";

const MyOrders = () => {
  return (
    <div>
      <NavbarCart />
      <div className="myOrderWrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Pizza</td>
              <td>2</td>
              <td>700</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Pizza</td>
              <td>1</td>
              <td>400</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Pizza</td>
              <td>3</td>
              <td>1200</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyOrders;