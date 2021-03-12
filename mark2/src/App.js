import React from 'react'

import './App.scss'

import { Hints } from './Hints'
import { Status } from './Status'
import { Menu } from './Menu'
import { Grid } from './Grid'

class App extends React.PureComponent {
  state = {
    status: true,
    radius: 2
  }

  setRadius = (radius) => {
    this.setState({ radius })
  }

  render () {
    const { radius, status } = this.state
    return (
      <div className="App">
        <Menu setRadius={this.setRadius}/>
        <Grid radius={radius}/>
        <Status  status={status}/>
        <Hints/>
      </div>
    )
  }
}

export default App
