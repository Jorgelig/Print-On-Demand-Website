import React, { Component } from 'react';
import './App.css';
class Store extends Component {
  state = {data:""}

  async componentDidMount() {
    const response = await fetch('/test')
    const data   = await response.json()
    this.setState({data: data})
  }
  render() {
    return (
      <div>
        <h1>Store</h1>
        <p>{this.state.data}</p>
      </div>
    );
  }
}
export default Store;