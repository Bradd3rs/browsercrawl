import React, { Component } from 'react';
import Player from './components/Player';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1,
      exp: 0,
      maxExp: 10,
      health: 10,
      maxHealth: 10,
      skillPoints: 0,
      crawling: false
    }
    this.crawl = this.crawl.bind(this);
    this.reduceHealth = this.reduceHealth.bind(this);
    this.resetHealth = this.resetHealth.bind(this);
    this.addExp = this.addExp.bind(this);
    this.levelUp = this.levelUp.bind(this);
  }
  crawl() {

    console.log('crawl');
    this.setState(() => ({
      crawling: true
    }))

    this.resetHealth();
    setTimeout(() => {
      
      this.reduceHealth(1);
      this.addExp();

      this.setState(() => ({
        crawling: false
      }))
    }, 500)
  }

  resetHealth() {

    console.log('reset health');
    this.setState(() => ({
      health: this.state.maxHealth
    }))
  }

  reduceHealth(damage) {

    console.log('reduce health', damage);
    this.setState((prevState) => ({
      health: prevState.health - damage
    }))
  }

  addExp() {
    
    console.log('add exp');
    this.setState((prevState) => ({
      exp: prevState.exp + 2
    }));
    if(this.state.exp >= this.state.maxExp) {
      this.levelUp()
    } ;
  }

  levelUp() {
    this.setState((prevState) => ({
      level: prevState.level + 1,
      skillPoints: prevState.skillPoints + 2,
      maxExp: prevState.maxExp + (prevState.maxExp * 1.2)
    }))
  }

  render() {
    return (
      <div>
        <h1>{ this.state.crawling ? 'Crawling' : null }</h1>
        {
          this.state.health > 0 ? 

          <Player 
            level={this.state.level} 
            exp={this.state.exp}
            maxExp={this.state.maxExp}
            health={this.state.health} 
            skillPoints={this.state.skillPoints}
            crawl={this.crawl}
            crawling={this.state.crawling}
          /> 

          :

          <h1>Ded</h1> 
        }
      </div>
    );
  }
}

export default App;