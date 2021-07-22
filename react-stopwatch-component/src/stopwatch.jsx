import React from 'react';
class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      isTicking: false,
      counter: 0
    };
  }

  handleClick() {
    if (!this.state.isTicking) {
      this.setState({
        isTicking: true,
        counter: this.state.counter
      });
      this.timerId = setInterval(() => {
        this.setState({
          isTicking: true,
          counter: (this.state.counter + 1)
        });
      }, 1000);
    } else {
      this.setState({
        isTicking: false,
        counter: this.state.counter
      });
      clearInterval(this.timerId);
    }
  }

  handleReset() {
    if (!this.state.isTicking) {
      this.setState({
        isTicking: false,
        counter: 0
      });
    }
  }

  render() {
    let div;
    const counter = this.state.counter;
    const isTicking = this.state.isTicking;
    if (isTicking) {
      div = <div className="container">
              <button onClick={this.handleReset} className="circle">
                {counter}
              </button>
              <button onClick={this.handleClick} className="playpause"><i className="fas fa-pause fa-3x"></i></button>
            </div>;
    } else {
      div = <div className="container">
              <button onClick={this.handleReset} className="circle">
                {counter}
              </button>
              <button onClick={this.handleClick} className="playpause"><i className="fas fa-play fa-3x"></i></button>
            </div>;
    }
    return div;
  }
}

export default Stopwatch;
