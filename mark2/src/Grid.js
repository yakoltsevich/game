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
// const arr = [1, 2, 3, 4, 5, 6, 7]
const arr = [
    {x: 0, y: 0, z: 0},
    {x: 0, y: -1, z: 1},
    {x: 0, y: 1, z: -1},

    {x: 1, y: 0, z: -1},
    {x: 1, y: -1, z: 0},

    {x: -1, y: 0, z: 1},
    {x: -1, y: 1, z: 0},
]
const arr2 = [

    {x: 0, y: 2, z: -2},
    {x: 0, y: 1, z: -1},
    {x: 0, y: 0, z: 0},
    {x: 0, y: -1, z: 1},
    {x: 0, y: -2, z: 2},

    {x: 1, y: 1, z: -2},
    {x: 1, y: 0, z: -1},
    {x: 1, y: -1, z: 0},
    {x: 1, y: -2, z: 1},

//  {x: 1, y: -2, z: 1}
//  {x: 1, y: -1, z: -0}
//  {x: 1, y: 0, z: -1}
//  {x: 1, y: 1, z: -2}

    {x: 2, y: 0, z: -2},
    {x: 2, y: -1, z: -1},
    {x: 2, y: -2, z: 0},

    {x: -1, y: 2, z: -1},
    {x: -1, y: 1, z: 0},
    {x: -1, y: 0, z: 1},
    {x: -1, y: -1, z: 2},

    {x: -2, y: 2, z: 0},
    {x: -2, y: 1, z: 1},
    {x: -2, y: 0, z: 2},
]

const arr3 = [

    {x: 0, y: 3, z: -3},
    {x: 0, y: 2, z: -2},
    {x: 0, y: 1, z: -1},
    {x: 0, y: 0, z: 0},
    {x: 0, y: -1, z: 1},
    {x: 0, y: -2, z: 2},
    {x: 0, y: -3, z: 3},

    {x: 1, y: 1, z: -2},
    {x: 1, y: 0, z: -1},
    {x: 1, y: -1, z: 0},
    {x: 1, y: -2, z: 1},

//  {x: 1, y: -2, z: 1}
//  {x: 1, y: -1, z: -0}
//  {x: 1, y: 0, z: -1}
//  {x: 1, y: 1, z: -2}

    {x: 2, y: 0, z: -2},
    {x: 2, y: -1, z: -1},
    {x: 2, y: -2, z: 0},

    {x: -1, y: 2, z: -1},
    {x: -1, y: 1, z: 0},
    {x: -1, y: 0, z: 1},
    {x: -1, y: -1, z: 2},

    {x: -2, y: 2, z: 0},
    {x: -2, y: 1, z: 1},
    {x: -2, y: 0, z: 2},


    {x: 0, y: 3, z: -3},
    {x: 0, y: 2, z: -2},
    {x: 0, y: 1, z: -1},
    {x: 0, y: 0, z: 0},
    {x: 0, y: -1, z: 1},
    {x: 0, y: -2, z: 2},
    {x: 0, y: -3, z: 3},


    {x: -3, y: 3, z: 0},
    {x: -3, y: 2, z: 1},
    {x: -3, y: 1, z: 2},
    {x: -3, y: 0, z: 3},
]


class Grid extends React.PureComponent {
    radius = 2
    startingPoint = {x: 0, y: 0, z: 0}
    count = this.radius * 3 + 1
    ar1 = [2, 4, 2, 4]
    ar3 = [2, 2, 4, 4]
    sum = (arr) => {
       const result =  arr.reduce((previousValue, currentItem, index, arr) => {

        })

        return result

    }
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
        console.log('tost arr', arr)

        return arr
    }

    render() {
        // console.log('tost this.radius', this.radius)
        const arr = this.collectX()
        // const ar = param[this.radius].arr
// console.log('tost ar', ar)
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
