import React from 'react';
import Container from './Container';
import Button from './Button';
import styles from '../CSS/level.module.css';

const Level = () => {
    return (
        <Container>
            <div className={styles.hero}>
                <h1 className={styles.heading}>Levels</h1>
                <div className={`${styles.level} ${styles.easy}`}>
                    <Button text='easy' />
                    <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptas inventore adipisci iure ex nam atque.</p>
                </div>
                <div className={`${styles.level} ${styles.medium}`}>
                    <Button text='medium' />
                    <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptas inventore adipisci iure ex nam atque.</p>
                </div>
                <div className={`${styles.level} ${styles.hard}`}>
                    <Button text='hard' />
                    <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptas inventore adipisci iure ex nam atque.</p>
                </div>
            </div>
        </Container>
    );
};

export default Level;