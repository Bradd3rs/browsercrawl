import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridSize: 3,
      grid: []
    }
    this.createGrid = this.createGrid.bind(this);
  }

  componentDidMount() {

    this.createGrid();
  }

  createGrid() {
    let size = this.state.gridSize;
    let grid = Array(size).fill(0).map(()=>Array(size).fill(0));

    this.setState(() => ({ grid  }))
  }
  
  render() {
    console.log(this.state.grid);
    return (
      <div></div>
    );
  }
}

export default App;