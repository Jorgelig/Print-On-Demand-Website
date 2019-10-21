import React, { Component } from 'react';
import './App.css';
class App extends Component {
  state = {data:""}

  async componentDidMount() {
    const response = await fetch('/test')
    const data   = await response.json()
    this.setState({data: data})
  }
  render() {
    return (
      <div>
        <p>{this.state.data}</p>
      </div>
    );
  }
}
export default App;
