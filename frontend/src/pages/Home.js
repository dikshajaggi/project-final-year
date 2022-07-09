import React from "react";
import { Link } from "react-router-dom";
import man from "../images/man.png";
import dog from "../images/dog.png"
import Navbar from "../components/Navbar";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="headerContainer">
          <h1> Gifts and More!! </h1>
          <br></br>
          <Link to="/menu">
            <button> Shop </button>
          </Link>
          <br></br>
          <p> Get 10% off on all products on ₹100 above </p>
        </div>
        <div class="home-bg">
          <img src = {man} alt="man" id="man"></img>
          <img src = {dog} alt="dog" id="dog"></img>
        </div>
      </div>
    </>
  );
}

export default Home;
