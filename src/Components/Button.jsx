import React from 'react';
import styles from '../CSS/button.module.css';

const Button= (props) => {
    return (
        <button className={styles.container} onClick={()=> props.onClick()}>
            {props.text}
        </button>
    );
} 

export default Button;
