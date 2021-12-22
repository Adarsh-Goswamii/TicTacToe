import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Level from '../Components/Level';
import Info from '../Components/Info';
import Timer from '../Components/Timer';
import styles from '../CSS/app.module.css'
import Choose from '../Components/Choose';
import Grid from '../Components/Grid';
import {useSelector} from 'react-redux';

const App= () => {
  const [_level, setLevel]= useState(undefined); 
  const [_weapon, setWeapon]= useState(undefined); 
  const [_size, setSize]= useState(undefined);
  
  let { level, weapon, size }= useSelector(state=> state.state);

  useEffect(()=> {
    setLevel(level);
    setWeapon(weapon);
    setSize(size);

    console.log(level, weapon, size);
  }, [level, weapon, size]);
  

  return (
    <div >
      <Header></Header>
      <div className={styles.hero}>
        {
          _level? 
          <Level />
          :
          _weapon? 
          <Choose />
          :
          <Grid n={_size} />
        }
        {
          _level || _weapon?
          <Info />
          :
          <Timer />
        }
      </div>
    </div>
  );
}

export default App;
