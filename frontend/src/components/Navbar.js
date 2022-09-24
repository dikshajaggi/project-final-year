import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";
import axios from "axios";
import Category from "./Category";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories as listCategories } from "../redux/actions/categoryActions";

 function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const dispatch = useDispatch();

  const getCategories = useSelector((state) => state.getCategories);
  const data = getCategories;
  console.log(data.categories, "---------------------")

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        {/* <img src={Logo} className="logoImg" /> */}
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/login"> Login </Link>
          <Link to="/cart"> Cart </Link>
          {/* {data?.map((item) => (
            <Category
              key={item._id}
              name={item.name}
            />
          ))} */}
          
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/login"> Login </Link>
        <Link to="/cart" className="btnCart">Cart</Link>
        {data.categories?.map((item) => (
            <Category
              key={item._id}
              name={item.name}
              categoryId={item._id}
            />
          ))}
        
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
