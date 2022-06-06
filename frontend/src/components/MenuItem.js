import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <div className="price-add">
        <p> ${price} </p>
        <Button id="buttonAdd">
          <Link id="add">Add</Link>
        </Button>
      </div>
    </div>
  );
}

export default MenuItem;
