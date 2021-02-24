import React from 'react';
import ReactDOM from 'react-dom';

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleDetails = this.handleToggleDetails.bind(this);
    this.state = {
      visibility: false,
    };
  }
  handleToggleDetails() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleDetails}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && <p>These are the secret details</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
