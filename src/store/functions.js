import { actions } from './store';
export function startTimer(setTime) {
    return setInterval(()=> setTime(prev=> prev-1) , 1000);
}

export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function delayBy10(timer, setTimer) {
    console.log("Function called");
    clearInterval(timer);
    console.log("timer cleared");
    await delay(10000); 
    return setTimer(startTimer()); 
}

export const levelBtnClick= (n, dispatch)=> {
    console.log('btnClicked');
    dispatch(actions.toggleLevel());
    dispatch(actions.toggleWeapon());
    dispatch(actions.setSize(n));
}

export const setWeapon= (weapon, dispatch) => {
    dispatch(actions.setPlayerWeapon(weapon));
}
