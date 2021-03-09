import React from 'react'

import './Hexagon.scss'

class Hexagon extends React.PureComponent {

    el = React.createRef()
    getLeft = (x) => {
        const {width, radius} = this.props
        const startValue = width * 0.75 * radius
        const value = width * 0.75 * x
        return `${startValue + value}px`
    }
    getTop = (x, y, z) => {
        const {height, radius} = this.props
        const startValue = height * radius
        const row = 2 * z + x
        // const row = Math.abs(y) + Math.abs(z)
        const value = height * row * 0.5
        return `${startValue + value}px`
    }

    render() {
        const {x, y, z, value, height, width} = this.props
        const top = this.getTop(x, y, z)
        const left = this.getLeft(x, y, z)
        const style = {top, left, height, width}
        return (
            <div ref={this.el} className='hexagon'
                 data-x={x}
                 data-y={y}
                 data-z={z}
                 style={style}
            >
                {/*<div>top:{top}</div>*/}
                <div>x:{x}</div>
                <div>y:{y}|z:{z}</div>
                {/*<div>{y}|{z}</div>*/}
                {/*<div>left:{left}</div>*/}
            </div>
        )
    }
}

export {Hexagon}
