import React from 'react'

class Status extends React.PureComponent {

  render() {

    return (
      <div className='status' >
        Game Status: {this.props.status ? 'playing' : 'game-over'}
      </div>
    )
  }
}

export { Status }
