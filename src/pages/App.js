import React, {useState} from 'react';
import Header from '../Components/Header';
import Level from '../Components/Level';
import Info from '../Components/Info';
import Timer from '../Components/Timer';
import styles from '../CSS/app.module.css'
import Choose from '../Components/Choose';
import Grid from '../Components/Grid';

function App() {
  const [levelChosen, setLevelChosen]= useState(false);

  return (
    <div >
      <Header></Header>
      <div className={styles.hero}>
        <Grid n={5}></Grid>
        <Timer></Timer>
      </div>

    </div>
  );
}

export default App;
