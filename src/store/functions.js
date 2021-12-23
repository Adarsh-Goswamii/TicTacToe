import { actions } from './store';
export function startTimer(dispatch) {
    console.log('timer made');
    return setInterval(() => dispatch(actions.decreaseTime()), 1000);
}

export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const levelBtnClick = (n, dispatch) => {
    console.log('btnClicked');
    dispatch(actions.toggleLevel());
    dispatch(actions.toggleWeapon());
    dispatch(actions.setSize(n));
}

export const setWeapon = (weapon, dispatch) => {
    dispatch(actions.setPlayerWeapon(weapon));
}

export function onClickConclusion(dispatch) {
    dispatch(actions.setConclusion("NOT_CONCLUDED"));
}

export const cellClicked = (row, col, _dispatch, _grid, weapon) => {
    return async (dispatch) => {
        // swap turn
        await _dispatch(actions.toggleTurn());
        // update grid status
        await _dispatch(actions.setGridState({ row, col, "value": weapon }));
        // stop the timer.
        await _dispatch(actions.deleteTimer());
        // add a delay for 1sec
        await delay(1000);

        let grid = [];
        for (let i of _grid) grid.push([...i]);
        grid[row][col] = weapon === 'cross' ? 2 : 1;

        let result = botBrain(grid, weapon);
        console.log(result);
        if (result.winner) {
            // user has already won
            _dispatch(actions.setConclusion("WON"));
            return;
        } else if (result.botWin) {
            // bot will win with next step.
            _dispatch(actions.setConclusion("LOST"));
            return;
        } else if (result.index[0] !== -1) {
            // we can block users winning move.
            _dispatch(actions.setGridState({ "row": result.index[0], "col": result.index[1], "value": (weapon === 'cross' ? 'circle' : 'cross') }));
        } else {
            // conclude the match as a draw
            if (result.filled) {
                _dispatch(actions.setConclusion("DRAW"));
                return;
            }

            // fill the last cell. 
            _dispatch(actions.setGridState({ "row": result.random[0], "col": result.random[1], "value": (weapon === 'cross' ? 'circle' : 'cross') }));
        }

        // run some code add bot's move
        console.log("computer made his move");
        // swap turn
        await _dispatch(actions.toggleTurn());
        // run the timer again
        await _dispatch(actions.setTimer(startTimer(_dispatch)));
    }
}

function botBrain(grid, weapon) {
    let bot = weapon === 'cross' ? 1 : 2;
    let player = weapon === 'cross' ? 2 : 1;
    let ret = { winner: false, botWin: false, index: [-1, -1], filled: false, random: [-1, -1] };
    let emptySpace = [], n = grid.length;

    for (let i = 1; i < n; i++) {
        let map = [0, 0, 0];
        for (let j = 1; j < n; j++) {
            if (grid[i][j] === -1) { map[0]++; emptySpace.push([i, j]); }
            else if (grid[i][j] === 1) map[1]++;
            else map[2]++;
        }

        if (map[player] === n - 1) ret.winner = true;
        if (map[bot] === n - 2 && map[0] === 1) ret.botWin = true;
        if (map[player] === n - 2 && map[0] === 1) {
            for (let j = 1; j < n; j++) {
                if (grid[i][j] != player) {
                    ret.index = [i, j];
                    break;
                }
            }
        }
    }

    for (let i = 1; i < n; i++) {
        let map = [0, 0, 0];
        for (let j = 1; j < n; j++) {
            if (grid[j][i] === -1) map[0]++;
            else if (grid[j][i] === 1) map[1]++;
            else map[2]++;
        }

        if (map[player] === n - 1) ret.winner = true;
        if (map[bot] === n - 2 && map[0] === 1) ret.botWin = true;
        if (map[player] === n - 2 && map[0] === 1) {
            for (let j = 1; j < n; j++) {
                if (grid[j][i] != player) {
                    ret.index = [j, i];
                    break;
                }
            }
        }
    }

    let map = [0, 0, 0];
    for (let i = 1; i < n; i++) {
        if (grid[i][i] === -1) map[0]++;
        else if (grid[i][i] === 1) map[1]++;
        else map[2]++;
    }

    if (map[player] === n - 1) ret.winner = true;
    if (map[bot] === n - 2 && map[0] === 1) ret.botWin = true;
    if (map[player] === n - 2 && map[0] === 1) {
        for (let j = 1; j < n; j++) {
            if (grid[j][j] != player) {
                ret.index = [j, j];
                break;
            }
        }
    }

    map = [0, 0, 0];
    for (let i = n - 1; i >= 1; i--) {
        if (grid[n - i][i] === -1) map[0]++;
        else if (grid[n - i][i] === 1) map[1]++;
        else map[2]++;
    }

    if (map[player] === n - 1) ret.winner = true;
    if (map[bot] === n - 2 && map[0] === 1) ret.botWin = true;
    if (map[player] === n - 2 && map[0] === 1) {
        for (let i = n - 1; i > 0; i--) {
            if (grid[n - i][i] != player) {
                ret.index = [n - i, i];
                break;
            }
        }
    }

    ret.filled = emptySpace.length <= 1;
    let temp;
    if (!ret.filled) {
        temp = Math.floor(Math.random() * emptySpace.length);
        ret.random = emptySpace[temp];
    }

    return ret;
}