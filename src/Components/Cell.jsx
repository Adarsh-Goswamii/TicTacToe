import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styles from '../CSS/grid.module.css';
import { cellClicked, checkGrid } from '../store/functions';

const Cell= (props) => {
    const [enabled, setEnabled]= useState(true);
    const [display, setDisplay]= useState(false);
    const [weapon, setWeapon]= useState(undefined);
    const [grid, setGrid]= useState(undefined);
    let dispatch= useDispatch();
    let { playerWeapon, grid: _grid, conclusion, playerTurn }= useSelector(state=> state.state);

    function onClickHandler() {
        if(!playerTurn || grid[props.row][props.col]!== -1) return;
        cellClicked(props.row, props.col, dispatch, grid, playerWeapon)();
    }

    useEffect(()=> {
        setWeapon(playerWeapon);
    }, [playerWeapon]);

    useEffect(()=> {
        if(conclusion!== "NOT_CONCLUDED") return;
        if(_grid[props.row][props.col]=== -1) {
            setEnabled(true);
        } else {
            setEnabled(false);
            if(_grid[props.row][props.col]=== 1) {
                setWeapon("circle");
            } else {
                setWeapon("cross")
            }
            setDisplay(true);
        }
        setGrid(_grid);

    }, [_grid]);

    return (
        <div className={`${styles.cell} ${enabled? styles.enable: ""}` } 
        style={{maxWidth: props.width, maxHeight: props.width}}
        onClick={()=> {

            onClickHandler();
        }}>
            {display? <img className={styles.image} src={`${weapon}.svg`} alt="" /> : <></>}
        </div>
    );
};

export default Cell;