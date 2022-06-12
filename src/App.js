import React, { useState } from 'react'
import Grid from './grid'
import PlayerInfo from './components/player-info/playerInfo';
import Header from './components/header/Header';

import { checkForColumnOfFour, checkForRowOfFour, checkForLeftDiagonal, checkForRightDiagonal } from './components/checkwinner';

import styles from './app.module.css';

const { container } = styles;

const App = () => {
    const [data, setData] = useState({
        winner: {
            name: undefined,
            indexes: []
        },
        turn: 'YCricle',
        positions: new Array(42).fill(null)
    });

    const onChange = (index) => {
        setData(prevData => {
            if (!prevData.positions[index] && !prevData.winner.name) {
                const data = { ...prevData }
                data.positions[index] = data.turn

                checkForColumnOfFour(index, data);
                checkForRowOfFour(index, data);
                checkForLeftDiagonal(index, data);
                checkForRightDiagonal(index, data);

                data.turn = (data.turn === 'YCricle') ? 'RCricle' : 'YCricle'
                return data
            } else {
                return prevData
            }
        })
    }

    return (
        <div className={container}>
            <Header winner={data.winner} />
            <Grid
                winningIndexes={data.winner.indexes}
                positions={data.positions}
                onChange={onChange}
            />
            <PlayerInfo turn={data.turn} winner={data.winner.name} />
        </div>
    )

}

export default App