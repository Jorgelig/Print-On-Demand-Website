import React, { Component } from 'react';
import './App.css';

import StoreItems from "./components/StoreItems.js"

class Store extends Component {
  constructor(){
    super();

    this.state={
      storeData:"",
      variantData:""//added to hold all information on all varients of the items in the store for the item page
    }
  }

  async componentDidMount() {
    let response = await fetch('/store');
    let data   = await response.json();
    console.log(data);
    this.setState({storeData: data.storeData});
    console.log(this.state.storeData);
    this.setState({variantData: data.variantData});
    console.log(this.state.variantData);
  };
  render() {
    return (
      <div>
        <h1>Store</h1>
        <p>{JSON.stringify(this.state.storeData)}</p>
          <StoreItems storeData={this.state.storeData.result} />
      </div>
    );
  }
}
export default Store;