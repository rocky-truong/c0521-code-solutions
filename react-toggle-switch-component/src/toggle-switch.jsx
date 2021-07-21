import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isOn: false };
  }

  handleClick() {
    if (!this.state.isOn) {
      this.setState({ isOn: true });
    } else {
      this.setState({ isOn: false });
    }
  }

  render() {
    let div;
    const isOn = this.state.isOn;
    if (isOn) {
      div = <div className="container">
              <button onClick={this.handleClick} className="button-on">
                <div className="oval">
                  <div className="circle-on"></div>
                </div>
              </button>
              <span>ON</span>
            </div>;
      return div;
    } else {
      div = <div className="container">
              <button onClick={this.handleClick} className="button-off">
                <div className="oval">
                  <div className="circle-off"></div>
                </div>
              </button>
              <span>OFF</span>
            </div>;
      return div;
    }
  }
}

export default ToggleSwitch;
