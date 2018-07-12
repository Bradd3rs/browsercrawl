import React from 'react';

class Masteries extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        this.props.increaseMaxHealth();
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.handleClick}>Max HP ++</button>
            </div>
        )
    }
}

export default Masteries;