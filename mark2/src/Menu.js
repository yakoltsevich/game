import React from 'react'

class Menu extends React.PureComponent {

  onClick = (e) => {
    this.props.setRadius(e.target.value)
  }

  render () {
    return (
      <div className='menu'>
        Select radius:
        <button onClick={this.onClick} value="2">2</button>
        <button onClick={this.onClick} value="3">3</button>
        <button onClick={this.onClick} value="4">4</button>
      </div>
    )
  }
}

export { Menu }
