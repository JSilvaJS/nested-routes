import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <h2>This is my Main View</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/murray/1000/1000">Big Murray</Link>
          <Link to="/murray/300/300">Med Murray</Link>
          <Link to="/murray/50/50">Small Murray</Link>
          <Link to="/c">View C</Link>
        </nav>
        {this.props.children}
        <footer>Stinky Feet</footer>
      </div>
    )
  }
}
