import React from 'react';
import styles from '../CSS/header.module.css';

const Header= () => {
    return (
        <div className={styles.container}>
            <h3>
                <span className={styles.tic}>Tic</span>
                <span className={styles.tac}>Tac</span>
                <span className={styles.toe}>Toe</span>
            </h3>
        </div>
    );
}

export default Header;