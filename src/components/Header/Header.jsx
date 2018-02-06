import React, { Component } from "react";
import "./Header.css";
import "./nav.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <h1>
            VogelVrij
          </h1>
        </div>
        <div className="menu-div" role="navigation">
          <div id="menuToggle">
            {/* A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it. */}
            <input type="checkbox" />

            {/* Some spans to act as a hamburger.

    They are acting like a real hamburger,
    not that McDonalds stuff. */}
            <span />
            <span />
            <span />

            {/* Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic. */}
            <ul id="menu"><a><li>Home</li></a><a><li>Over</li></a><a><li>Collectie</li></a><a><li>Maatwerk</li></a><a><li>Contact</li></a></ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
