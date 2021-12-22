import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styles from '../CSS/grid.module.css';
import { cellClicked } from '../store/functions';

const Cell= (props) => {
    const [enabled, setEnabled]= useState(true);
    const [display, setDisplay]= useState(false);
    const [weapon, setWeapon]= useState(undefined);
    const [timer, setTimer]= useState(undefined);
    let dispatch= useDispatch();

    function onClickHandler() {
        if(enabled) {
            setDisplay(true);
            setEnabled(false);
        } 
        cellClicked(props.row, props.col, timer, dispatch)();
    }

    let { playerWeapon, timer: _timer }= useSelector(state=> state.state);

    useEffect(()=> {
        setWeapon(playerWeapon);
    }, [playerWeapon]);

    useEffect(()=> {
        setTimer(_timer);
    }, [_timer]);

    return (
        <div className={`${styles.cell} ${enabled? styles.enable: ""}` } 
        style={{width: props.width, height: props.width}}
        onClick={()=> onClickHandler()}>
            {display? <img className={styles.image} src={`${weapon}.svg`} alt="" /> : <></>}
        </div>
    );
};

export default Cell;