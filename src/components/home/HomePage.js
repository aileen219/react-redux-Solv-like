import React, { Component } from 'react';
import { Link } from 'react-router';
import ToDosPage from "../todo/ToDosPage";

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Werq</h1>
        <p>Get stuff done. Achieve.</p>
        <Link to="todo" className="btn btn-primary btn-lg" component={ToDosPage}>
          What Werq?
        </Link>

      </div>
    );
  }
}

export default HomePage;
