import Link from 'gatsby-link';
import React, { Component } from 'react';
import './Header.css';
import './nav.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link className="logo" to="/">
          <h1 className="logo-text">VogelVrij</h1>
        </Link>
        <div className="menu-div" role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span />
            <span />
            <span />
            <ul id="menu">
              <Link to="/over">
                <li>Over</li>
              </Link>
              <Link to="/collectie">
                <li>Collectie</li>
              </Link>
              <Link to="/maatwerk">
                <li>Maatwerk</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
