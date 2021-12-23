import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styles from '../CSS/overlay.module.css';
import { actions } from '../store/store';
import {onClickConclusion} from '../store/functions';

const Popup = () => {
    const [conclusion, setConclusion]= useState(undefined);
    let { conclusion: _conclusion } = useSelector(state => state.state);
    let dispatch= useDispatch();

    useEffect(()=> {
        setConclusion(_conclusion);
    }, [_conclusion]);

    return (
        <div className={styles.container}>
            {
                conclusion === 'WON' ? <Won />
                    : conclusion === 'LOST' ? <Lost />
                        : conclusion === 'DRAW' ? <Draw />
                            : <></>
            }
        </div>
    );
};



const Won = () => {
    let dispatch= useDispatch();

    return (
        <div className={styles.message}>
            <h3>Congratulations, you won the match!!!</h3>
            <button onClick={()=> onClickConclusion(dispatch)} className={styles.btn}>{'<<-  Home'}</button>
        </div>
    );
};

const Lost = () => {
    let dispatch= useDispatch();
    return (
        <div className={styles.message}>
            <h3>You did well...but better luck next time. </h3>
            <button onClick={()=> onClickConclusion(dispatch)} className={styles.btn}>{'  Rematch >>'}</button>
        </div>
    );
};

const Draw = () => {
    let dispatch= useDispatch();
    return (
        <div className={styles.message}>
            <h3>Seems like no one won the match.</h3>
            <button onClick={()=> onClickConclusion(dispatch)} className={styles.btn}>{'  Challenge Again >>'}</button>
        </div>
    );
};


export default Popup;