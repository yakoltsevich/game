import React from 'react'

import { Hexagon } from './Hexagon'

const param = [
  {
    height: 140,
    width: 160
  },
  {
    height: 86,
    width: 100
  },
  {
    height: 62,
    width: 72
  }
]

class Grid extends React.Component {
  collectGrid = () => {
    let arr = []
    const radius = this.props.radius - 1

    for (let i = -radius; i <= radius; i++) {
      for (let j = -radius; j <= radius; j++) {
        if (i < 0 && (-j + -i) <= radius) {
          const obj = { x: i, y: -j + -i, z: j }
          arr.push(obj)
        }

        if (i === 0) {
          const obj = { x: i, y: j, z: -j }
          arr.push(obj)
        }
        if (i > 0 && (j - i) >= -radius) {
          const obj = { x: i, y: j - i, z: -j }
          arr.push(obj)
        }
      }
    }

    return arr
  }

  render () {
    const { radius } = this.props
    const arr = this.collectGrid()
    return (
      <div className='grid'>
        {arr.map((el, index) => <Hexagon
            key={index}
            width={param[radius - 2].width}
            height={param[radius - 2].height}
            value={index}
            radius={radius - 1}
            x={el.x}
            y={el.y}
            z={el.z}
          />
        )}
      </div>
    )
  }
}

export { Grid }
