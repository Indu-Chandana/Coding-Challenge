import React, { useState } from 'react'
import Grid from './grid'
import PlayerInfo from './components/player-info/playerInfo';
import Header from './components/header/Header';

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

    const checkForColumnOfFour = (index) => {
        for (let i = 0; i < 21; i++) {
            const columnOfFour = [i, i + 7, i + 7 * 2, i + 7 * 3]

            if (columnOfFour.every(square => data.positions[square] === data.positions[index])) {
                console.log('good');

                data.winner.name = data.positions[index]
                data.winner.indexes = columnOfFour
            }
        }
    }

    const checkForRowOfFour = (index) => {
        for (let i = 0; i < 41; i++) {
            const rowOfFour = [i, i + 1, i + 2, i + 3]

            const notValid = [4, 5, 6, 11, 12, 13, 18, 19, 20, 25, 26, 27, 32, 33, 34, 39, 40, 41]

            if (notValid.includes(i)) continue

            if (rowOfFour.every(square => data.positions[square] === data.positions[index])) {

                data.winner.name = data.positions[index]
                data.winner.indexes = rowOfFour
            }
        }
    }

    const onChange = (index) => {
        setData(prevData => {
            if (!prevData.positions[index] && !prevData.winner.name) {
                const data = { ...prevData }
                data.positions[index] = data.turn

                checkForColumnOfFour(index);
                checkForRowOfFour(index);

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