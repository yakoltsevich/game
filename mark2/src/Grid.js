import React from 'react'

import {Hexagon} from './Hexagon'
import './Grid.scss'

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
    },
    {
        height: 31,
        width: 36
    },
    {
        height: 31,
        width: 36
    },
    {
        height: 31,
        width: 36
    },
]



class Grid extends React.PureComponent {
    radius = 2

    collectX = () => {
        let arr = []
        const radius = this.radius + 1
        for (let i = -radius; i <= radius; i++) {
            for (let j = -radius; j <= radius; j++) {
                if (i < 0 && (-j + -i) <= radius) {
                    const obj = {x: i, y: -j + -i, z: j}
                    arr.push(obj)
                }

                if (i === 0) {
                    const obj = {x: i, y: j, z: -j}
                    arr.push(obj)
                }
                if (i > 0 && (j - i) >= -radius) {
                    const obj = {x: i, y: j - i, z: -j}
                    arr.push(obj)
                }
            }
        }

        return arr
    }

    render() {
        const arr = this.collectX()
        return (
            <div className='grid'>
                {arr.map((el, index) => <Hexagon
                        width={param[this.radius].width}
                        height={param[this.radius].height}
                        value={index}
                        radius={this.radius + 1}
                        x={el?.x}
                        y={el?.y}
                        z={el?.z}
                    />
                )}
            </div>
        )
    }
}

export {Grid}
