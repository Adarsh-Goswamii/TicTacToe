import React, {useState} from 'react';
import styles from '../CSS/grid.module.css';

const Cell= (props) => {
    const [enabled, setEnabled]= useState(true);
    const [display, setDisplay]= useState(false);

    function onClickHandler() {
        if(enabled) {
            setDisplay(true);
            setEnabled(false);
        } 
    }

    return (
        <div className={styles.cell} 
        style={{width: props.width, height: props.width}}
        onClick={()=> onClickHandler()}>
            {display? <img className={styles.image} src="/cross.svg" alt="" /> : <></>}
        </div>
    );
};

export default Cell;