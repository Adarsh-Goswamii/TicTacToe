import { actions } from './store';
export function startTimer(dispatch) {
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

export const cellClicked = (row, col, timer, _dispatch) => {
    return async (dispatch) => {
        console.log(row, col, "clicked");
        // swap turn
        await _dispatch(actions.toggleTurn());
        // update grid status
        await _dispatch(actions.setGridState({ row, col }));
        // stop the timer.
        await _dispatch(actions.deleteTimer());
        // add a delay for 1sec
        await delay(1000);
        // run some code add bot's move
        console.log("computer made his move");
        // swap turn
        await _dispatch(actions.toggleTurn());
        // run the timer again
        _dispatch(actions.setTimer(startTimer(_dispatch)));;
    }
}