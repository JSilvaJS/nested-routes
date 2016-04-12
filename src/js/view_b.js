import React, { Component } from 'react';

export default class ViewB extends Component {
  render() {
    let { width, height } = this.props.params;
    let murray_src = `http://fillmurray.com/${width}/${height}`;
    return (
      <div>
      <h1>Mr. Murray</h1>
      <img src={murray_src}/>
      </div>
    )
  }
}
