import React from 'react'

import './App.scss';
import './main.scss';

import { Hints } from './Hints'
import { Status } from './Status'
import { Menu } from './Menu'
import { Grid } from './Grid'

class App extends React.PureComponent {
  state={
    status: true
  }
  render () {
    return (
      <div className="App">
        <Menu />
        <Grid />
        <Status status={this.state.status} />
        <Hints />
      </div>
    );
  }
}

export default App;
