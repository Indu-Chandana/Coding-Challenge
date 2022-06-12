const checkForColumnOfFour = (index, data) => {
    for (let i = 0; i < 21; i++) {
        const columnOfFour = [i, i + 7, i + 7 * 2, i + 7 * 3]

        if (columnOfFour.every(square => data.positions[square] === data.positions[index])) {
            console.log('good');

            data.winner.name = data.positions[index]
            data.winner.indexes = columnOfFour
        }
    }
}

export { checkForColumnOfFour }

const checkForRowOfFour = (index, data) => {
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

export { checkForRowOfFour }

const checkForLeftDiagonal = (index, data) => {
    for (let i = 0; i < 41; i++) {
        const diagOfFour = [i, i + 8, i + 8 * 2, i + 8 * 3]

        if (diagOfFour.every(square => data.positions[square] === data.positions[index])) {
            data.winner.name = data.positions[index]
            data.winner.indexes = diagOfFour
        }
    }
}

export { checkForLeftDiagonal }

const checkForRightDiagonal = (index, data) => {
    for (let i = 0; i < 41; i++) {
        const diagOfFour = [i + 3, i + 9, i + 15, i + 21]

        if (diagOfFour.every(square => data.positions[square] === data.positions[index])) {
            data.winner.name = data.positions[index]
            data.winner.indexes = diagOfFour
        }
    }
}

export { checkForRightDiagonal }