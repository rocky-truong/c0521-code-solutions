import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isClicked: false,
      clicks: 0
    };
  }

  handleClick() {
    this.setState({ isClicked: true, clicks: (this.state.clicks + 1) });
  }

  render() {
    let button;
    const isClicked = this.state.isClicked;
    const clickCount = this.state.clicks;
    if (isClicked) {
      if (clickCount < 3) {
        button = <button onClick={this.handleClick} className="hot-button cold">Hot Button! Clicks: {clickCount}</button>;
        return button;
      } else if (clickCount < 6) {
        button = <button onClick={this.handleClick} className="hot-button cool">Hot Button! Clicks: {clickCount}</button>;
        return button;
      } else if (clickCount < 9) {
        button = <button onClick={this.handleClick} className="hot-button tepid">Hot Button! Clicks: {clickCount}</button>;
      } else if (clickCount < 12) {
        button = <button onClick={this.handleClick} className="hot-button warm">Hot Button! Clicks: {clickCount}</button>;
      } else if (clickCount < 15) {
        button = <button onClick={this.handleClick} className="hot-button hot">Hot Button! Clicks: {clickCount}</button>;
      } else {
        button = <button onClick={this.handleClick} className="hot-button nuclear">Hot Button! Clicks: {clickCount}</button>;
      }
    } else {
      button = <button onClick={this.handleClick} className="hot-button cold">Hot Button! Clicks: {clickCount}</button>;
    }
    return button;
  }
}

export default HotButton;
