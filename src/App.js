import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
      Hollaa
        {this.props.children}
      </div>
    );
  }
}

export default App
