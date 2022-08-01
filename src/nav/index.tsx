import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

export default class Nav extends React.Component {
  render() {    
    return (
        <nav className="Nav">
            <div className="Nav__container">
                <div className="Nav__right">
                <ul className="Nav__item-wrapper">
                    <li className="active">
                    <Link className="Nav__link" to="/">Home</Link>
                    </li>
                    <li className="active">
                     <Link className="Nav__link" to="/Login">Login</Link>
                     </li>
                    <li className="active">
                <Link className="Nav__link" to="/Register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
    }
}