import React from "react";

class FancyButtons extends React.Component {
    constructor() {
        super();
        this.btn01 = this.btn01.bind(this);
        this.btn02 = this.btn02.bind(this);
        this.btn03 = this.btn03.bind(this);
        this.state = {
            counter01: 0,
            counter02: 0,
        }
    }

    btn01() {
        this.setState((lastClickCount, _props) => ({
            counter01: lastClickCount.counter01 + 1,
        }))
        if (this.state.counter01 % 2 === 0) { console.log('white'); } else { console.log('green');}
    }

    btn01ChangeColor() {
        if (this.state.counter01 % 2 === 0) { return 'green' }
    }
    
    btn02() {
        this.setState((lastClickCount, _props) => ({
            counter02: lastClickCount.counter02 + 1,
        }))
        if (this.state.counter02 % 2 === 0) { console.log('white'); } else { console.log('yellow');}
    }

    btn02ChangeColor() {
        if (this.state.counter02 % 2 === 0) { return 'yellow' }
    }
    
    btn03() {
        this.setState((_props) => ({
            counter01: 0,
            counter02: 0,
        }))
    }

    render() {
        return (
            <div className="buttons">
                <button onClick={this.btn01} style={{ backgroundColor: this.btn01ChangeColor() }}>{this.state.counter01}</button>
                <button onClick={this.btn02} style={{ backgroundColor: this.btn02ChangeColor() }}>{this.state.counter02}</button>
                <button onClick={this.btn03}>Zera contagens</button>
            </div>
        );
    }
}

export default FancyButtons;