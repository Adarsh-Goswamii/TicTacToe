import { configureStore, createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "state",
    initialState: {
        level: true, 
        weapon: false, 
        size: 3, 
        grid: [], 
        playerWeapon: "cross"
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