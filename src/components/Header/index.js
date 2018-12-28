import Link from 'gatsby-link';
import React, {Component} from 'react';
import './Header.css';
import './nav.css';

class Header extends Component {
  state = {
    checked: false,
  };

  componentWillMount() {
    this.setState({checked: false});
  }

  componentWillReceiveProps(newProps) {
    this.setState({checked: false});
  }

  render() {
    return (
      <header className="header">
        <Link className="logo" to="/">
          <div className="logo-text">
            <h1>
              V<em className="upper-crazy-o">o</em>
              <em className="lower-crazy-o">o</em>
              <em className="invisible-o">o</em>gelVrij
            </h1>
            <h4>Juwelen</h4>
            <h4>Handgemaakt</h4>
            <h4>Op maat </h4>
          </div>
        </Link>
        <div className="menu-div" role="navigation">
          <div id="menuToggle">
            <input
              type="checkbox"
              checked={this.state.checked}
              onClick={() => this.setState({checked: !this.state.checked})}
            />
            <span />
            <span />
            <span />
            <ul id="menu">
              <Link to="/maatwerk">
                <li>Maatwerk</li>
              </Link>
              <Link to="/collectie">
                <li>Collectie</li>
              </Link>
              <Link to="/juwelen">
                <li>Hun Juweel</li>
              </Link>
              <Link to="/mijn-verhaal">
                <li>Mijn verhaal</li>
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
