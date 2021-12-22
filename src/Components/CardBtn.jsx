import React from 'react';
import Container from './Container';
import styles from '../CSS/level.module.css';

const CardBtn = (props) => {
    return (
        <Container>
            <div className={styles.card}>
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
