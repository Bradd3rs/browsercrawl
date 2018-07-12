import React, { Component } from 'react';

class Player extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.crawl();
    }
    render() {
        return (
            <div>
                <div>Zone: {this.props.zone}</div>
                <div>Level: {this.props.playerLevel}</div>
                <div>Health: {this.props.health}</div>
                <div>Exp: {this.props.exp} / {Math.round(this.props.maxExp)}</div>
                <div>Skill points: {this.props.skillPoints}</div>
                <button type="button" disabled={this.props.crawling} onClick={this.handleClick}>Crawl</button>
            </div>
        );
    }
}

export default Player;