import React, { useEffect, useState } from 'react';
import Container from './Container';
import styles from '../CSS/level.module.css';
import { useSelector } from 'react-redux';

const CardBtn = (props) => {
    const [weapon, setWeapon]= useState("cross");
    let { playerWeapon }= useSelector(state=> state.state);

    useEffect(()=> {
        setWeapon(playerWeapon);
        console.log(playerWeapon);
    }, [playerWeapon]);

    return (
        <Container>
            <div className={`${styles.card} ${props.type=== weapon? styles.active: ""}`} 
                onClick={()=> props.onClick()}>
                {
                    props.type === 'circle' ?
                        <img src="/circle.svg" alt="circle" className={styles.type_img} />
                        :
                        <img src='/cross.svg' alt="cross" className={styles.type_img} />
                }
                <h3 className={styles.type_text}>{props.type}</h3>
            </div>
        </Container>
    );
};

export default CardBtn;
