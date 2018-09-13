import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Header.sass';

class Header extends Component {
  render() {
    return (
      <div className="Header">   
        <ul>
            <li><Link  to='/'>Home</Link></li>
            <li><Link  to='/Todos'>Todos</Link></li>
            <li><Link  to='/Favoritos'>Favoritos</Link></li>
        </ul>   
      </div>
    );
  }
}

export default Header;
