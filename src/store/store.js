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
        time: 60,
        conclusion: "NOT_CONCLUDED"
    },

    reducers: {
        toggleLevel(state) {
            state.level = !state.level;
        },
        toggleWeapon(state) {
            state.weapon = !state.weapon;
        },
        setSize(state, action) {
            state.size = action.payload;

            let new_grid= [];
            for (let i = 0; i <= action.payload; i++) {
                let temp = [];
                for (let j = 0; j <= action.payload; j++) {
                    temp.push(-1);
                }
                new_grid.push(temp);
            }

            state.grid= new_grid;
        },
        setGridState(state, action) {
            state.grid[action.payload.row][action.payload.col] = action.payload.value === "cross" ? 2 : 1;
        },
        setPlayerWeapon(state, action) {
            console.log(action.payload);
            state.playerWeapon = action.payload;
        },
        toggleTurn(state) {
            state.playerTurn = !state.playerTurn
        },
        setTimer(state, action) {
            console.log(action.payload);
            state.timer = action.payload;
        },
        deleteTimer(state) {
            clearInterval(state.timer);
            state.timer = -1;
        },
        decreaseTime(state) {
            state.time = state.time - 1;
        },
        setTime(state, action) {
            state.time = action.payload;
        },
        setConclusion(state, action) {
            state.conclusion = action.payload;
        },
        setInitialState(state) {
            console.log("initial state");
            clearInterval(state.timer);
            state.level = true;
            state.weapon = false;
            state.size = 3;
            state.playerWeapon = "cross";
            state.playerTurn = true;
            state.timer = -1;
            state.time = 60;
        }, 
        resetMatch(state) {
            state.playerTurn = true;
            clearInterval(state.timer);
            state.timer = -1;
        }
    }
})

const store = configureStore({
    reducer: {
        "state": slice.reducer
    }
});

export default store;
export const actions = slice.actions;