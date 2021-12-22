import React from 'react';
import styles from '../CSS/info.module.css';

const Info = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>
                Welcome to
                <span className={styles.dark_text}>TicTacToe</span>
            </h2>

            <ul className={styles.list}>
                <li className={styles.points}>
                    Press a square to place your mark
                </li>
                <li className={styles.points}>
                    Make three in a row horizontally, vertically, or diagonally to win
                </li>
                <li className={styles.points}>
                    Watch your opponent and block them if they get 2 in a row
                </li>
                <li className={styles.points}>
                    Try a harder mode to keep it interesting
                </li>
                <li className={styles.points}>
                    Enjoy you play.
                </li>
            </ul>
        </div>
    );
};

export default Info;