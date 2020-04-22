import React from "react";


const Navbar = ({totalCounter}) => {

  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Navbar {totalCounter}</span>
    </nav>
  );
}

export default Navbar;
