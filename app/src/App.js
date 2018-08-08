import React, { Component } from 'react';
import styled from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridSize: 3,
      grid: [],
      zoom: 5
    }
    this.createGrid = this.createGrid.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
    this.selectBlock = this.selectBlock.bind(this);
  }

  componentDidMount() {

    this.createGrid();
  }

  createGrid() {
    let size = this.state.gridSize;
    let grid = Array(size).fill(0).map(()=>Array(size).fill(0));

    this.setState(() => ({ grid  }))
  }

  nextLevel() {
    
    this.setState((prevState) => (
      { 
        zoom: prevState.zoom - 0.3,
        gridSize: prevState.gridSize + 1
      }
    ))
    this.createGrid()
    setTimeout(() => {
      this.createGrid()
    }, 1);
  }
  
  selectBlock(blockNumber) {
    console.log(blockNumber);
    document.getElementsByClassName(`block-${blockNumber}`)[0].classList.add('selected');
  }
  
  render() {
    console.log(this.state.grid);
    const Block = styled.div` 
      background: tomato;
      padding: ${this.state.zoom}%;
      margin: 1%;
      border: 2px solid red;
      color: white;
      font-weight: bold;
      font-size: 2em;
      text-align: center;

      &.selected {
        background: rebeccapurple;
      }

      @media( min-width: 768px) {
        padding: ${this.state.zoom - 1}%;
        margin: 0.5%;
      }
    `;
    return (
      <div>
        {
          this.state.grid.map((column, i) => (
            <Row key={i} className={`row row-${i}`}>
              {
                this.state.grid.map((row, j) => {
                let number = Math.floor(Math.random()*90000) + 10000;
                return (

                  <Block key={j} className={`flex-item flex1 block-${number}`} onClick={() => this.selectBlock(number)}></Block>
                )})
              }
            </Row>
          ))
        }
        <button type="button" onClick={this.nextLevel}>Next level</button>
      </div>
    );
  }
}

export default App;

const Row = styled.div`
  /* display: block; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

