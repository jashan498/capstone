import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top navbarMain">
      <div className="container-fluid">
        <div className="navbar-header">
          <a href=".">
            <h2 style={{ color: "white" }}>Multiplayer Chess</h2>
          </a>
        </div>
        <a href="https://jashansraw.me/single-player-mode/">
          <p className="navText nav ml-auto font-weight-bold">
            Single Player Mode
          </p>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
