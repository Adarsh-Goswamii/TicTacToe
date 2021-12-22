import React from 'react';
import Container from './Container';
import CardBtn from './CardBtn';
import Button from './Button';
import styles from '../CSS/level.module.css';

const Choose = () => {
    return (
        <Container>
            <div className={styles.hero}>
                <h1 className={styles.choose_heading}>
                    Choose your 
                    <span className={styles.dark_text}>Weapon</span>
                </h1>
                <div className={styles.type_container}>
                    <CardBtn type="cross" />
                    <CardBtn type="circle" />
                </div>

                <div className={styles.btn_container}>
                    <Button text='Start >>' />
                </div>

            </div>
        </Container>
    );
};

export default Choose;
