import React, { useEffect, useState } from 'react';
import styles from '../CSS/timer.module.css';
import { startTimer } from '../store/functions';
import Button from './Button';

const Timer = () => {
    let [time, setTime] = useState(180);
    const [timer, setTimer] = useState(undefined);

    useEffect(() => {
        // setTimer(startTimer());
        console.log(timer);
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Timer</h1>
            <div className={styles.timer}>
                {`${10 > Math.floor(time / 60) ? "0" + Math.floor(time / 60) : Math.floor(time / 60)} : ${10 > time % 60 ? "0" + time % 60 : time % 60}`}
            </div>
            <h3 className={styles.subheading}>Computer's Turn</h3>
            <div className={styles.btn_container}>
                <Button text="Reset" />
                <Button text="Quit" />
            </div>
        </div>
    );
};

export default Timer;