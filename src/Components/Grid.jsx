import React, { useEffect, useState } from 'react';
import Container from './Container';
import styles from '../CSS/grid.module.css';
import Cell from './Cell';
import { useSelector } from 'react-redux';

const Grid = (props) => {
    let list = [];
    let width= props.n=== 5? "80px": "100px";
    for (let i = 1; i <= props.n; i++) {
        for (let j = 1; j <= props.n; j++) {
            list.push(<Cell row={i} col={j} width={width} />)
        }
    }


    return (
        <Container>
            <div className={styles.hero}>
                <div className={styles.container}
                    style={{ gridTemplateColumns: `repeat(${props.n}, 1fr)`, gridTemplateRows: `repeat(${props.n}, 1fr)` }}>
                    {list}
                </div>
            </div>
        </Container>
    );
}

export default Grid;