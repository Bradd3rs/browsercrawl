import React, { Component } from 'react';
import Player from './components/Player';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerLevel: 1,
      exp: 0,
      maxExp: 5,
      gainedLevel: false,
      health: 10,
      maxHealth: 10,
      skillPoints: 0,
      zone: 1,
      crawling: false,
      damageMultiplier: 1
    }
    this.crawl = this.crawl.bind(this);
    this.crawling = this.crawling.bind(this);
    this.reduceHealth = this.reduceHealth.bind(this);
    this.resetHealth = this.resetHealth.bind(this);
    this.addExp = this.addExp.bind(this);
    this.levelUp = this.levelUp.bind(this);
    this.increaseZone = this.increaseZone.bind(this);
    this.checkLevel = this.checkLevel.bind(this);
  }

  ////////// CRAWL! //////////

  crawl() {

    console.log('crawl');
    this.crawling();
    this.resetHealth();
    this.checkLevel();

    setTimeout(() => {

      this.reduceHealth(this.state.maxHealth / 3, this.state.damageMultiplier);
      this.addExp();
      this.increaseZone();
      this.crawling();
    }, 2000)
  }

  crawling() {

    this.setState(() => ({
      crawling: !this.state.crawling
    }))
  }

  ////////// HEALTH //////////

  resetHealth() {

    console.log('reset health');
    this.setState(() => ({
      health: this.state.maxHealth
    }))
  }

  reduceHealth(damage, multiplier) {

    let totalDamage = Math.floor(Math.random() * (damage * multiplier)) + 1;

    console.log('reduce health', totalDamage);
    this.setState((prevState) => ({
      health: prevState.health - totalDamage
    }))
  }

  ////////// EXP/LEVEL //////////

  checkLevel() {

    let zone = this.state.zone;

    if (zone % 10 === 0) {
      this.setState((prevState) => ({
        damageMultiplier: prevState.damageMultiplier + 2
      }))
    }
  }

  addExp() {

    console.log('add exp');
    this.setState((prevState) => ({
      exp: prevState.exp + 2
    }));

    if (this.state.exp >= this.state.maxExp) {
      this.levelUp()
    };
  }

  levelUp() {

    this.setState((prevState) => ({
      playerLevel: prevState.playerLevel + 1,
      skillPoints: prevState.skillPoints + 2,
      exp: 0,
      gainedLevel: true,
      maxExp: prevState.maxExp + (prevState.maxExp * 1.2)
    }))
  }

  increaseZone() {

    this.setState((prevState) => ({
      zone: prevState.zone + 1
    }))
  }

  render() {
    return (
      <div>
        <h1>{this.state.crawling ? 'Crawling' : null}</h1>
        <h1>{this.state.zone % 10 === 0 ? 'BOSS FIGHT' : null}</h1>
        {
          this.state.health > 0 ?

            <Player
              playerLevel={this.state.playerLevel}
              exp={this.state.exp}
              maxExp={this.state.maxExp}
              health={this.state.health}
              skillPoints={this.state.skillPoints}
              crawl={this.crawl}
              crawling={this.state.crawling}
              zone={this.state.zone}
            />

            :

            <h1>Ded</h1>
        }
      </div>
    );
  }
}

export default App;