import React from 'react';
import Container from './Container';
import CardBtn from './CardBtn';
import Button from './Button';
import styles from '../CSS/level.module.css';
import { setWeapon, startTimer } from '../store/functions';
import { useDispatch } from 'react-redux';
import { actions } from '../store/store';

const Choose = () => {
    let dispatch = useDispatch();

    return (
        <Container>
            <div className={styles.hero}>
                <h1 className={styles.choose_heading}>
                    Choose your
                    <span className={styles.dark_text}>Weapon</span>
                </h1>
                <div className={styles.type_container}>
                    <CardBtn type="cross" onClick={() => setWeapon("cross", dispatch)} />
                    <CardBtn type="circle" onClick={() => setWeapon("circle", dispatch)} />
                </div>
                <div className={styles.btn_container}>
                    <Button text='Start >>' onClick={() => {
                        dispatch(actions.toggleWeapon());
                        dispatch(actions.setTimer(startTimer(dispatch)));
                    }} />
                </div>

            </div>
        </Container>
    );
};

export default Choose;
