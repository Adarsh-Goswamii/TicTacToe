import { configureStore, createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "state",
    initialState: {
        level: true, 
        weapon: false, 
        size: 3, 
        grid: [], 
        playerWeapon: "cross", 
        playerTurn: true, 
        timer: -1, 
        time: 60
    },

    reducers: {
        toggleLevel(state) {
            state.level= !state.level;
        }, 
        toggleWeapon(state) {
            state.weapon= !state.weapon;
        }, 
        setSize(state, action) {
            state.size= action.payload;

            for(let i=0;i<=action.payload;i++) {
                let temp= [];
                for(let j=0;j<=action.payload;j++) {
                    temp.push(-1);
                }
                state.grid.push(temp);
            }
        }, 
        setGridState(state, action) {
            state.grid[action.payload.row][action.payload.col]= action.payload.value;
        }, 
        setPlayerWeapon(state, action) {
            console.log(action.payload);
            state.playerWeapon= action.payload;
        }, 
        toggleTurn(state) {
            state.playerTurn= !state.playerTurn
        }, 
        setTimer(state, action) {
            console.log(action.payload);
            state.timer= action.payload;
        }, 
        deleteTimer(state) {
            clearInterval(state.timer);
            state.timer= -1;
        },
        decreaseTime(state) {
            state.time= state.time-1;
        }, 
        setTime(state, action) {
            state.time= action.payload;
        }
    }
})

const store = configureStore({
    reducer: {
        "state": slice.reducer
    }
});

export default store;
export const actions= slice.actions;