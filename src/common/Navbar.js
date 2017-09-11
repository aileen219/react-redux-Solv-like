import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

const NavBar = () => {
  if(location.pathname === '/') {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="todo" activeClassName="active">What Werq?</Link>
      </nav>
    );
  } else if (location.pathname === '/todo') {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link className="navbar-brand" to="todo" activeClassName="active">What Werq?</Link>
      </nav>
    );
  }
};

export default NavBar;
