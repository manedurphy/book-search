import React from 'react';
import logo from '.././../assets/images/foodLogo.jpg';
import { Link } from 'react-router-dom';
import '../../index.scss';

const Navbar = () => {
  return (
    <section className="navbar">
      <img src={logo} alt="food" />
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </section>
  );
};

export default Navbar;
