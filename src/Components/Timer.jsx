import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../CSS/timer.module.css';
import { checkGrid, resetMatch, startTimer } from '../store/functions';
import Button from './Button';
import { actions } from '../store/store';

const Timer = (props) => {
    const [turn, setTurn]= useState(undefined); 
    const [time, setTime]= useState(undefined); 
    let dispatch= useDispatch();
    let {playerTurn, time: _time, size}= useSelector(state=> state.state);

    useEffect(() => {
        dispatch(actions.setTime(props.time));
    }, []);

    useEffect(() => {
        setTurn(playerTurn);
    }, [playerTurn]);

    useEffect(() => {
        setTime(_time);
        if(time=== 0) {
            dispatch(actions.setConclusion("DRAW"));
        }
    }, [_time]);

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Timer</h1>
            <div className={styles.timer}>
                {`${10 > Math.floor(time  / 60) ? "0" + Math.floor(time  / 60) : Math.floor(time  / 60)} : ${10 > time  % 60 ? "0" + time  % 60 : time  % 60}`}
            </div>
            <h3 className={styles.subheading}>{`${turn? "Your ": "Computer's"} Turn`}</h3>
            <div className={styles.btn_container}>
                <Button text="Reset" onClick={()=> {
                    resetMatch(size, dispatch)();
                    dispatch(actions.setConclusion("NOT_CONCLUDED"));}} />
                <Button text="Quit" onClick={()=> {
                    dispatch(actions.setInitialState());
                    dispatch(actions.setConclusion("NOT_CONCLUDED"));
                }}/>
            </div>
        </div>
    );
};

export default Timer;