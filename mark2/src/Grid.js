import React from 'react'

import { Hexagon } from './Hexagon'
import './Grid.scss'


const arr=  [1,2,3,4,5,6,7]
class Grid extends React.PureComponent {
  radius = 2
  count = this.radius *3 +1

  render() {

    return (
      <div className='grid' >
        {arr.map(el=>        <Hexagon number={el}/>
        )}
      </div>
    )
  }
}

export { Grid }
