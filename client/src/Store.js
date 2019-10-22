import React, { Component } from 'react';
import './App.css';
class Store extends Component {
  constructor(){
    super();

    this.state={
      data:""
    }
  }

  async componentDidMount() {
    const response = await fetch('/store');
    const store   = await response.json();
    console.log(store);
    this.setState({data: store});
    console.log(this.state.data)
  };
  render() {
    return (
      <div>
        <h1>Store</h1>
        <p>{JSON.stringify(this.state.data)}</p>
      </div>
    );
  }
}
export default Store;