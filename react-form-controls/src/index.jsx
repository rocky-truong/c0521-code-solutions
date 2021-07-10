import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({ email: event.target.value });
  }

  handleSubmit() {
    event.preventDefault();
    console.log('state: ', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" value={this.state.email}
        onChange={this.handleChange} />
        <input type="submit" value="Sign Up" />
      </form>);
  }
}

const element = (
  <NewsletterForm />
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
