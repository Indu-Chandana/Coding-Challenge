import React from 'react';
import RenderSVG from './components/render-SVG/RenderSVG';

import styles from './grid.module.css'

const { container, winner } = styles;

const Grid = (props) => {
    const { positions, onChange, winningIndexes } = props;

    const divisions = positions.map((value, index) => {
        const isWinningIndex = winningIndexes.includes(index)
        return (
            <div
                className={isWinningIndex ? winner : null}
                key={index}
                onClick={() => { onChange(index) }}
            >
                <RenderSVG svg={value} />
            </div>
        )
    })

    return (
        <div className={container}>
            {divisions}
        </div>
    )
}

export default Grid