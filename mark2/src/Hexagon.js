import React from 'react'

import './Hexagon.scss'

class Hexagon extends React.PureComponent {

  render() {

    return (
      <div className='hexagon' >
        {this.props.number}
      </div>
    )
  }
}

export { Hexagon }
