import React from 'react'
import {BrowserRouter,Routes,Route,Link,} from "react-router-dom";


const HomeNavBar = () => {
  return (
    <div id="HomeNavBar">
        <Link to="/">Home</Link>
        <Link to="/Category">Category</Link>
        <Link to="/Cuisine">Cuisine</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Myfavorites">Favorites</Link>
    </div>
  )
}

export default HomeNavBar